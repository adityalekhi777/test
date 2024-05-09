
import Home from './pages/Home';
import RegistrationForm from './pages/RegistrationForm';
import Congratulations from './pages/Congratulations';
import { Routes,Route, BrowserRouter } from "react-router-dom";


import './App.css';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<RegistrationForm />} />
          <Route path="/congrats" element={<Congratulations />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
