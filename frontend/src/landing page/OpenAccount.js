import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import useNavigate

function OpenAccount() {
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleSignUpClick = () => {
    navigate('/SignUp'); // ✅ route to your SignUp page
  };

  return ( 
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <h1 className='mt-5'>Open a Zerodha account</h1>
        <p>Modern platforms and apps, ₹0 investment, and flat ₹20 intraday and F&O</p>

        <button
          className='p-2 btn btn-primary fs-5 mb-5'
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignUpClick} // ✅ add navigate here
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
