import React, { use } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const CongratulationPageOne = () => {
  const [paypal, setPaypal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://kings-backend-4diu.onrender.com/api/config/paypal") // Replace with your API endpoint
      .then((response) => {
        setLoading(true);
        setPaypal(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (paypal?.clientId) {
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": paypal.clientId,
            currency: "USD",
          },
        });
        paypalDispatch({ type: "setLoadingStatus", value: "pending" });
      };
      if (!window.paypal) {
        loadPaypalScript();
      }
    }
  }, [paypal, paypalDispatch]);

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        console.log("Payment successful");
        navigate("/congratulation-two");
      } catch (err) {
        console.error(err?.data?.message || err.message);
      }
    });
  }

  // async function onApproveTest() {
  //   alert("Order is paid");
  // }

  function onError(err) {
    console.error(err.message);
  }

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: "0" },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  // const navigate = useNavigate();
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

            {loading && (
              <div className="flex justify-center my-10">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
              </div>
            )}

            {isPending ? (
              <div className="flex justify-center my-10">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
              </div>
            ) : (
              <div>
                {/* THIS BUTTON IS FOR TESTING! REMOVE BEFORE PRODUCTION! */}
                {/* <button
                  style={{ marginBottom: "10px" }}
                  onClick={onApproveTest}
                >
                  Test Pay Order
                </button> */}

                <div>
                  <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                  ></PayPalButtons>
                </div>
              </div>
            )}
            {/* <button className="md:w-[30%] self-end mt-4 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
              <div class="flex justify-between space-x-2 md:space-x-0">
                <p>PAY NOW</p>
                <img className="md:w-6 w-5" src="assets/arrow.png" alt=""/>
              </div>
            </button> */}

            <img className="w-16" src="assets/fansy.png" alt="" />
          </div>
        </div>
        <div class="flex justify-end">
          <img className="w-12 mr-10" src="assets/arrow-line.png" alt="" />
          {/* <img className="w-12" src="assets/arrow-line-2.png" alt=""/> */}
        </div>
      </div>
    </div>
  );
};

export default CongratulationPageOne;
