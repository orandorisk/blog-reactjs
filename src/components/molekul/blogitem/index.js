import React from 'react';
import './blogitem.scss';
import { useNavigate } from 'react-router-dom';

const BlogItem = ({blog}) => {
  const navigate = useNavigate();
  const detailPage = (id) => {
    navigate(`/detail/${id}`);
  }
  if(!blog?.length) return <p>Blog is empty</p>
  console.log(blog);
  return (
    <React.Fragment>
      {
        blog.map((item) => 
          <div className='blog-item'>
            <img className='image-thumb' src={`http://localhost:3000/${item.image}`} alt="post" />
            <div className='content-detail'>
              <p className='title'>{item.title}</p>
              <p className='author'>{item.author.name} - {item.createdAt}</p>
              <p className='body'>{item.body}</p>
              <button className='btn-detail' onClick={() => detailPage(item._id)}>Detail</button>
            </div>
          </div>
        )
      }
    </React.Fragment>
    
  )
}

export default BlogItem