import React, { useEffect, useState } from 'react';
import { Button, BlogItem, Gap } from '../../components';
import './home.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogs } from '../../config/Redux/actions';

const Home = () => {

  const [ count, setCount ] = useState(1);
  const { data, page } = useSelector(state => state.data);
  const dispatch = useDispatch();
  console.log('data state global: ', data);

  useEffect(() => {
    dispatch(getBlogs(count));
  }, [dispatch,count]);

  const navigate = useNavigate();
  const createPage = () => {
    navigate('/create');
  }

  const previousPage = () => {
    setCount(count <= 1 ? 1 : count - 1);
    console.log(count)
  }

  const nextPage = () => {
    setCount(count === page.totalPage ? page.totalPage : count + 1);
    console.log(count)
  }

  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
         <Button title="create blog" onClick={createPage}/>
      </div>
      <Gap height={20}/>
      <div className='content-wrapper'>
        <BlogItem blog={data}/>
      </div>
      <div className='pagination'>
        <Button title="Previous" onClick={previousPage}/>
        <Gap widht={20}/>
        <p className='text-page'>{page.currentPage} / {page.totalPage}</p>
        <Button title="Next" onClick={nextPage}/>
      </div>
      <Gap height={20}/>
    </div>
  )
}

export default Home