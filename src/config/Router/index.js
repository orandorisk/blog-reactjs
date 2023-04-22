import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import MainApp from '../../pages/MainApp';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import CreatePage from '../../pages/CreatePage';
import DetailPage from '../../pages/DetailPage';

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
  )
}

export default Router