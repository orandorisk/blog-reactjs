import React from 'react';
import { Navbar, Footer} from '../../components';
import { RegisterBg } from '../../assets';
import './detail.scss';

const DetailPage = () => {
  return (
    <div className='main-app_wrapper'>
      <Navbar />
        <div className='main-app'>
          <div className='detail-blog-wrapper'>
            <img className="img-cover" src={RegisterBg} alt="thumb"/>
            <p className='blog-title'>Title Blog</p>
            <p className='blog-author'>Author Date</p>
            <p className='blog-body'>Body</p>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default DetailPage