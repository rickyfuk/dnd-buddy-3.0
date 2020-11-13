import React from 'react';
import NavBlank from '../components/NavBlank/NavBlank';
import NavBot from '../components/NavBottom/NavBot';
import EmailAddressForm from '../components/Sign-Up/email-sign-up';
import './css/reset.css';
import './css/style.css';

function Register() {
  return (
    <div className='body'>
        <NavBlank />
        <div className='mainContainer'>
            <EmailAddressForm />
        </div>
        <NavBot />
    </div>
  );
}

export default Register;