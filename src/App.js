import {Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import CongratulationPageOne from './pages/CongratulationPageOne';
import CongratulationPageTwo from './pages/CongratulationPageTwo';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/congratulation-one' element={<CongratulationPageOne />} />
        <Route path='/congratulation-two' element={<CongratulationPageTwo />} />        
      </Routes>
    </div>
  );
}

export default App;