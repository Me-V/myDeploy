"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'

const Dashboard = () => {
  const { data: session, update } = useSession()
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    profilePicture: null,
    coverPicture: null,
    razorpayId: '',
    razorpayCredentials: '',
    razorpaySecret: '',
  })

  useEffect(() => {
    if (session) {
      getData()
    } else {
      router.push('/Login') // Redirect to login if not authenticated
    }
  }, [session, router])

  const getData = async () => {
    const userData = await fetchuser(session.user.name)
    setForm(userData)
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (files) {
      setForm({ ...form, [name]: files[0] }) // If input is file, save the file object
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    for (const key in form) {
      formData.append(key, form[key])
    }

    await updateProfile(formData, session.user.name)
    toast('Profile Updated', {
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
    update() // Update the session after profile update
  }

  return (

    <>
     
      <ToastContainer />
      <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit} className="p-8 max-w-lg mx-auto bg-white rounded-2xl shadow-xl w-full">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Profile Form</h2>

          <div className="mb-5">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-1">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black"
              required
            />
          </div>

          {/* <div className="mb-5">
          <label htmlFor="profilePicture" className="block text-gray-700 font-bold mb-1">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="coverPicture" className="block text-gray-700 font-bold mb-1">Cover Picture</label>
          <input
            type="file"
            id="coverPicture"
            name="coverPicture"
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required
          />
        </div> */}

          <div className="mb-5">
            <label htmlFor="razorpayid" className="block text-gray-700 font-bold mb-1">Razorpay ID</label>
            <input
              type="text"
              id="razorpayid"
              name="razorpayid"
              value={form.razorpayid}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black"
              required
            />
          </div>

          {/* <div className="mb-5">
          <label htmlFor="razorpayCredentials" className="block text-gray-700 font-bold mb-1">Razorpay Credentials</label>
          <input
            type="text"
            id="razorpayCredentials"
            name="razorpayCredentials"
            value={form.razorpayCredentials}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black"
            required
          />
        </div> */}

          <div className="mb-5">
            <label htmlFor="razorpaysecret" className="block text-gray-700 font-bold mb-1">Razorpay Secret</label>
            <input
              type="text"
              id="razorpaysecret"
              name="razorpaysecret"
              value={form.razorpaysecret}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black"
              required
            />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-3 rounded-lg hover:from-purple-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-200">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Dashboard
