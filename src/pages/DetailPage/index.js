import React, { useEffect } from 'react';
import { Navbar, Footer} from '../../components';
import './detail.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../../config/Redux/actions';

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { dataById } = useSelector(state => state.dataById);
  
  useEffect(() => {
    dispatch(getBlogById(id));
  }, [id, dispatch])
  
  console.log('data by id: ', dataById);
  console.log('id: ', id)

  if (!dataById) {
    return <p>Loading...</p>
  }

  return (
    <div className='main-app_wrapper'>
      <Navbar />
        <div className='main-app'>
          <div className='detail-blog-wrapper'>
            <img className="img-cover" src={`http://localhost:3000/${dataById.image}`} alt="thumb"/>
            <p className='blog-title'>{dataById.title}</p>
            <p className='blog-author'>{dataById.createdAt}</p>
            <p className='blog-body'>{dataById.body}</p>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default DetailPage