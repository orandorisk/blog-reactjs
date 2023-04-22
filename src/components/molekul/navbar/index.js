import React from 'react';
import './navbar.scss';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate('/login');
  }
  return (
    <div className='header'>
      <p className='logo-app'>Blog</p>
      <p className='menu-item' onClick={logout}>Logout</p>
    </div>
  )
}

export default Navbar