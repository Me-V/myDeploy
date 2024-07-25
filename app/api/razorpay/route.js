import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const POST = async (req) => {
    try {
        await connectDB();

        // Parse request body
        let body = await req.formData();
        body = Object.fromEntries(body);

        // Find payment
        const payment = await Payment.findOne({ oid: body.razorpay_order_id });
        if (!payment) {
            return NextResponse.json({ success: false, message: "Order Id Not Found" });
        }

        // Log the username to debug
        console.log("Username from Payment:", payment.to_user);

        // Find user associated with the payment
        const user = await User.findOne({ username: payment.to_user });
        if (!user) {
            return NextResponse.json({ success: false, message: "User Not Found" });
        }

        // Log the user object for debugging
        console.log("User found:", user);

        // Verify payment
        const secret = user.razorpaysecret;
        const isVerified = validatePaymentVerification(
            { order_id: body.razorpay_order_id, payment_id: body.razorpay_payment_id },
            body.razorpay_signature,
            secret
        );

        if (isVerified) {
            // Update payment status
            const updatedPayment = await Payment.findOneAndUpdate(
                { oid: body.razorpay_order_id },
                { done: "true" },
                { new: true }
            );

            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}`);
        } else {
            return NextResponse.json({ success: false, message: "Payment Verification Failed" });
        }
    } catch (error) {
        console.error("Error in POST handler:", error);
        return NextResponse.json({ success: false, message: "An error occurred" });
    }
};
