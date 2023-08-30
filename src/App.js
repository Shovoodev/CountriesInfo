import Home from './Pages/Home';
import CountryDetails from './Pages/CountryDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactForm from './components/contactform/ContactForm';
import ThankYouPage from './components/thankspage/ThankYouPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/countries/:countryCode' element={<CountryDetails/>} />
          <Route path='*' element={<h2>404 Page not found</h2>} />
          <Route path='/contactUs' element={<ContactForm/>} />
          <Route path='/thanks' element={<ThankYouPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;