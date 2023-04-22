import React from 'react';
import { Navbar, Footer, Input, Button, Upload, TextArea, Gap} from '../../components';
import './create.scss';

const CreatePage = () => {
  return (
    <div className='main-app_wrapper'>
      <Navbar />
        <div className='main-app'>
          <div className='blog-post'>
            <p className='title'>Create New Blog Post</p>
            <Input label="Post Title"/>
            <Upload />
            <TextArea />
            <Gap height={20} />
            <div className='button-action'>
              <Button title="Save" />
            </div>
            <Gap height={20} />
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default CreatePage