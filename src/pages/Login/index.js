import React from 'react';
import { useNavigate } from 'react-router-dom';

import {LoginBg} from '../../assets/index.js';

import { Input, Button, Gap, Link } from '../../components';

const Login = () => {
  const navigate = useNavigate();
  const onRegister = () => {
    navigate('/register');
  }
  return (
    <div className="main-page">
    <div className="left">
      <img src={LoginBg} alt='register-bg' className='bg-image' />
    </div>
    <div className="right">
      <h1>Login</h1>
      <Input label="Email" placeholder="Email"/>
      <Gap height={20} />
      <Input label="Password" placeholder="Pasword"/>
      <Gap height={50}/>
      <Button title="Login" onClick={onRegister}/>
      <Gap height={100}/>
      <Link title="Belum Punya Akun?" onClick={onRegister}/>
    </div>
  </div>
  )
}

export default Login