import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import CongratulationPageOne from "./pages/CongratulationPageOne";
import CongratulationPageTwo from "./pages/CongratulationPageTwo";
import CoreValuesPage from "./pages/CoreValuesPage";
import AboutPage from "./pages/AboutPage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import StripePayment from "./pages/StripePaymant";

function App() {
  useEffect(() => {
    // Prevent the browser from restoring the previous scroll position
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/congratulation-one" element={<CongratulationPageOne />} />
        <Route path="/congratulation-two" element={<CongratulationPageTwo />} />
        <Route path="/payment" element={<StripePayment />} />
        <Route path="/core-values" element={<CoreValuesPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/application-form" element={<ApplicationFormPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </div>
  );
}

export default App;
