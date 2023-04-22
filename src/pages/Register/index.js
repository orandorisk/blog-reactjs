import React from 'react';
import './register.scss';
import { useNavigate } from 'react-router-dom';

import {RegisterBg} from '../../assets/index.js';

import { Input, Button, Gap, Link } from '../../components';

const Register = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/login');
  }
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt='register-bg' className='bg-image' />
      </div>
      <div className="right">
        <h1>Register</h1>
        <Input label="Full Name" placeholder="Full Name"/>
        <Gap height={20}/>
        <Input label="Email" placeholder="Email"/>
        <Gap height={20} />
        <Input label="Password" placeholder="Pasword"/>
        <Gap height={50}/>
        <Button title="Register" onClick={onLogin}/>
        <Gap height={100}/>
        <Link title="Kembali ke Home" onClick={onLogin}/>
      </div>
    </div>
  ) 
}

export default Register