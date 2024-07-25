"use client";
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import Image from 'next/image';

const PaymentPage = ({ username }) => {
  const { data: session } = useSession();
  const [paymentform, setPaymentform] = useState({});
  const [currentUser, setcurrentUser] = useState({});
  const [payments, setPayments] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      let u = await fetchuser(username);
      setcurrentUser(u);

      let dbpayments = await fetchpayments(username);
      setPayments(dbpayments);
    };

    getData();
  }, [username]);

  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast('Thanks for your donation!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const pay = async (amount) => {
    try {
      // Ensure session and user data are available
      if (!session?.user?.email) {
        console.error("User not authenticated");
        return;
      }

      // Get the order ID
      const { id: orderId } = await initiate(amount, username, paymentform);

      // Configure Razorpay options
      const options = {
        key: currentUser.razorpayid,
        amount: amount, // Amount in currency subunits (e.g., 10 INR should be 1000)
        currency: "INR",
        name: "Get Me A Chai",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId,
        callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        prefill: {
          name: paymentform.name || "Guest",
          email: session.user.email,
          contact: paymentform.contact || ""
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };

      // Load and open Razorpay
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className='cover w-full relative h-[180px]'>
        {/* <img
          className='object-cover w-full h-[350px]'
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2741032/623b5eec9f0c418292a5ed3d237f2ad8/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/3.jpg?token-time=1722729600&token-hash=c__imrlaDBMzsUFJSloZjiMb6oVkCRy35gghOyOy6a0%3D"
          alt=""
        /> */}
        <div className='rounded-full absolute bottom-[-3rem] right-[44%]'>
          <Image
            className='rounded-full w-[10rem] h-[10rem]'
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg"
            width={160}
            height={160}
            alt="Profile Picture"
          />
        </div>
      </div>

      <div className='h-[100vh] info flex flex-col items-center gap-2'>
        <div className='font-bold text-lg mt-20'> @{username}</div>
        <div className='text-slate-400'>Let's Help {username} to get a chai!</div>
        <div>{payments.length} Payments | Rs {payments.reduce((a, b) => a + b.amount / 100, 0)} raised</div>

        <div className='payment flex gap-3 w-[80%] mt-11'>
          <div className='supporters w-1/2 bg-slate-900 rounded-lg text-white p-10 overflow-y-auto max-h-[400px] fancy-scrollbar'>
            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
            <ul>
              {payments.length === 0 && <li>No payments yet</li>}
              {payments.map((p, i) => (
                <li key={i} className='my-6 flex gap-2 items-center'>
                  <Image width={30} height={30} src="/user.jpg" alt="User" />
                  <span>{p.name} Donated <span className='font-bold'>Rs {p.amount / 100}</span> with a message "{p.message}"</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10'>
            <h2 className='text-2xl font-bold my-5'>Make Payment</h2>
            <div className="flex gap-2 flex-col">
              <input onChange={handleChange} name="name" value={paymentform.name || ''} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder="Enter Your Name" />
              <input onChange={handleChange} name="message" value={paymentform.message || ''} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder="Enter Your Message" />
              <input onChange={handleChange} name="amount" value={paymentform.amount || ''} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder="Enter Your Amount" />
              <div className='text-center'></div>
              <button
                onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                type="button"
                className={`w-fit text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 focus:ring-4 focus:outline-none transition duration-200 ${paymentform.name?.length >= 3 && paymentform.message?.length >= 4 && paymentform.amount?.length > 1 / 10
                  ? 'bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800'
                  : 'bg-gray-400 cursor-not-allowed'
                  }`}
                disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}
              >
                Pay
              </button>
            </div>
            <div className='flex gap-2 mt-5'>
              <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(1000)}>Pay 10rs</button>
              <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(2000)}>Pay 20rs</button>
              <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(3000)}>Pay 30rs</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
