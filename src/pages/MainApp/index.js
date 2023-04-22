import React from 'react';
import { Navbar, Footer} from '../../components';
import Home from '../Home';

const MainApp = () => {
  return (
    <div className='main-app_wrapper'>
      <Navbar />
      <div className='main-app'>
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default MainApp