import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import PaystackPayment from "../components/PaystackPayment";

const CongratulationPageOne = () => {
  const [region, setRegion] = useState("");
  const [showPaystackForm, setShowPaystackForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegionSelect = (e) => {
    setRegion(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowPaystackForm(true);
  };

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_live_51R91JFHqriTZ5S6h8ApvIqn4bdnM0zSrHmsqE45fK9GeEQ5QJSf8dOyuXan9znPrj9tkelU7w2Vi8PBQwClP7mdI00usCxVRLW"
    );

    const response = await fetch(
      "https://kings-backend-4diu.onrender.com/create-checkout-session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );

    const session = await response.json();

    if (!session.id) {
      console.error("❌ No session ID returned:", session);
      return;
    }
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="">
      <div class="container mx-auto px-5 max-w-xl bg-lightBlue min-h-screen">
        <img className="pt-2" src="assets/image.png" alt="" />
        <div class="flex flex-col items-center justify-center space-y-4 mt-4">
          <div class="flex items-center justify-center space-x-10">
            <img
              className="md:w-[50%] w-[70%] mb-10"
              src="assets/congratulation-image.png"
              alt=""
            />
            <img className="w-16 self-end" src="assets/fansy.png" alt="" />
          </div>

          <div class="flex flex-col space-y-6 max-w-xl">
            <h2 className="md:text-4xl  text-xl text-center font-bold">
              CONGRATULATIONS
            </h2>
            <p className="text-justify max-w-lg">
              Thank you for registering to be a trainee in Kings Health Care
              Practitioners Limited. you are now one step away to being a
              certified medical practitioner. We are currently processing your
              application so you will receive your application verification and
              your onboarding details shortly. Kindly make payment to complete
              your application.
            </p>

            <div className="max-w-md mx-auto mt-8 p-4 shadow-md rounded-xl bg-white">
              <label className="block text-sm font-medium mb-2">
                Where are you making payment from?
              </label>
              <select
                onChange={handleRegionSelect}
                value={region}
                className="w-full p-2 border rounded mb-6"
              >
                <option value="">Select your region</option>
                <option value="africa">Africa</option>
                <option value="other">Other Continents</option>
              </select>

              {region === "africa" && !showPaystackForm && (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                  />
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded w-full"
                  >
                    Continue to Paystack
                  </button>
                </form>
              )}

              {region === "africa" && showPaystackForm && (
                <div className="mt-4">
                  <PaystackPayment
                    amount={50}
                    email={email}
                    name={name}
                    className="bg-blue-600 text-white px-6 py-3 rounded"
                  />
                </div>
              )}

              {region === "other" && (
                <div className="mt-4 mx-10">
                  <button
                onClick={makePayment}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 w-full md:w-auto"
              >
                Pay with Stripe
              </button>
                </div>
              )}
            </div>
            {/* <div className="flex flex-col md:flex-row gap-4">
              <button
                onClick={makePayment}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 w-full md:w-auto"
              >
                Pay with Stripe
              </button>

              <button
                onClick={() => setShowPaystackForm(true)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 w-full md:w-auto"
              >
                Pay with Paystack
              </button>
            </div> */}

            {/* Paystack Form Pop-up */}
            {/* {showPaystackForm && (
              <div className="mt-6 p-6 border rounded-xl shadow-md bg-white">
                <h3 className="text-xl font-semibold mb-4">
                  Enter your details
                </h3>

                <div className="flex flex-col space-y-3">
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded-md px-4 py-2"
                  />
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-md px-4 py-2"
                  />

                  {name && email && (
                    <PaystackPayment
                      amount={50}
                      email={email}
                      name={name}
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
                    />
                  )}
                </div>
              </div>
            )} */}

            <img className="w-16" src="assets/fansy.png" alt="" />
          </div>
        </div>
        <div class="flex justify-end">
          <img className="w-12 mr-10" src="assets/arrow-line.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CongratulationPageOne;
