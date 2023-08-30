import React from 'react';
import "./thankyoupage.css"

import { useNavigate } from 'react-router-dom';


const ThankYouPage = () => {
    let navigate = useNavigate(); 
const routeChange = () =>{ 
  let path =`/`; 
  navigate(path);
}
  return (
    <div className="thank-you-container">
      <h1 className='thank-you-container-h1'>Thank You!</h1>
      <p className='thank-you-container-p'>Your message has been received.</p>
      <p className='thank-you-container-p'>We appreciate your feedback.</p>
      <button  type="button" className='custom-button' onClick={routeChange}>BACK TO HOME</button>
    </div>
  );
};

export default ThankYouPage;
