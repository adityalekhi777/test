import './App.css';
import ThemeContextProvider from './ThemeContext'
import Home from './pages/Home';
import RegistrationForm from './pages/RegistrationForm';


function App() {
  return (
    <ThemeContextProvider>
     <RegistrationForm/>
    </ThemeContextProvider>
  );
}

export default App;
