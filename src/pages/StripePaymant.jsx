// // Payment.js
// import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY); // Store in .env
// console.log(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// const PaymentForm = () => {
//   const [amount, setAmount] = useState(100); // Example amount
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { data } = await axios.post("http://localhost:8000/create-payment-intent", { amount, currency: "usd" });

//     const { error, paymentIntent } = await stripe.confirmCardPayment(data.clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     if (error) {
//       console.error("Payment Error:", error);
//     } else if (paymentIntent.status === "succeeded") {
//       alert("Payment Successful!");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Amount:</label>
//       <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
//       <CardElement />
//       <button type="submit" disabled={!stripe}>Pay Now</button>
//     </form>
//   );
// };

// const StripePayment = () => (
//   <Elements stripe={stripePromise}>
//     <PaymentForm />
//   </Elements>
// );

// export default StripePayment;
