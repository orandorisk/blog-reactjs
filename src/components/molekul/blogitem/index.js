import React from 'react';
import './blogitem.scss';

const BlogItem = ({blog}) => {
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
            </div>
          </div>
        )
      }
    </React.Fragment>
    
  )
}

export default BlogItem