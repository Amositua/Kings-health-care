import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentScreen = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
        return;
    }

    
  }

    return (
        <div className="payment-container">
            <div class="form-container">
            <h2>Credit Card Payment:</h2>
            <CardElement />
            <button>Pay Now</button>
            </div>
          
        </div>
    )

}

export default PaymentScreen