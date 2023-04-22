import React, { useEffect, useState } from 'react';
import { Button, BlogItem, Gap } from '../../components';
import './home.scss';
import { useNavigate } from 'react-router-dom';
import { ApiFetch } from '../../utils/ApiFetch';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {

  const [data, setData] = useState([]);
  const { datas, name} = useSelector(state => state.data);
  const dispatch = useDispatch();
  console.log('data state global: ', datas);

  useEffect(() => {
    const getData = async () => {
      const { data } = await ApiFetch();
      setData(data);
      dispatch({ type: 'DATA_UPDATE', payload: data });
    }
    getData();
  }, [dispatch]);

  const navigate = useNavigate();
  const createPage = () => {
    navigate('/create');
  }
  return (
    <div className='home-page-wrapper'>
      <p>{name}</p>
      <div className='create-wrapper'>
         <Button title="create blog" onClick={createPage}/>
      </div>
      <Gap height={20}/>
      <div className='content-wrapper'>
        <BlogItem blog={datas}/>
      </div>
      <div className='pagination'>
        <Button title="Previous"/>
        <Gap widht={20}/>
        <Button title="Next"/>
      </div>
      <Gap height={20}/>
    </div>
  )
}

export default Home