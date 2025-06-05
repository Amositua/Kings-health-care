import React from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";

const PaystackPayment = ({ amount, email, name, className }) => {
    const navigate = useNavigate();

  const publicKey = "pk_live_98a793aafb125ed229cd5e7aa6b27a92ee4200a2";
  const amountInKobo = amount * 100;

  const componentProps = {
    className,
    email,
    amount: amountInKobo,
    metadata: {
      name,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      alert("Payment successful");
      navigate("/congratulation-two");
    },
    onClose: () => alert("Payment dialog closed"),
  };

  return <PaystackButton {...componentProps} />;
};

export default PaystackPayment;
