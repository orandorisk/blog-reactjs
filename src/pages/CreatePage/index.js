import React, { useState } from 'react';
import { Navbar, Footer, Input, Button, Upload, TextArea, Gap} from '../../components';
import './create.scss';
import Axios from 'axios';

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  }

  const onSubmit = () => {
    console.log('title: ', title);
    console.log('body: ', body);
    console.log('image: ', image);

    const data = new FormData();
    data.append('title', title);
    data.append('body', body);
    data.append('image', image);

    Axios.post('http://localhost:3000/v1/blog/blog', data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log('data berhasil upload : ',res);
    })
    .catch(err => {
      console.log(err);
    });
  }
  return (
    <div className='main-app_wrapper'>
      <Navbar />
        <div className='main-app'>
          <div className='blog-post'>
            <p className='title'>Create New Blog Post</p>
            <Input label="Post Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <Upload onChange={(e) => onImageUpload(e)} img={imagePreview}/>
            <TextArea value={body} onChange={(e) => setBody(e.target.value)}/>
            <Gap height={20} />
            <div className='button-action'>
              <Button title="Save" onClick={onSubmit}/>
            </div>
            <Gap height={20} />
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default CreatePage