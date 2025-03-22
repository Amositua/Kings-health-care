import {Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import CongratulationPageOne from './pages/CongratulationPageOne';
import CongratulationPageTwo from './pages/CongratulationPageTwo';
import CoreValuesPage from './pages/CoreValuesPage';
import AboutPage from './pages/AboutPage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import PrivacyPolicy from './pages/PrivacyPolicyPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/congratulation-one' element={<CongratulationPageOne />} />
        <Route path='/congratulation-two' element={<CongratulationPageTwo />} />        
        <Route path='/core-values' element={<CoreValuesPage />} />        
        <Route path='/about-us' element={<AboutPage />} />        
        <Route path='/application-form' element={<ApplicationFormPage />} />     
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />     

      </Routes>
    </div>
  );
}

export default App;