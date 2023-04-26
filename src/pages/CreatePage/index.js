import React from 'react';
import { Navbar, Footer, Input, Button, Upload, TextArea, Gap} from '../../components';
import './create.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setForm, setImgPreview, createPost } from '../../config/Redux/actions';

const CreatePage = () => {
  const { form, imgPreview } = useSelector(state => state.createBlogReducers);
  const dispatch = useDispatch();
  const { title, body } = form;

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm('image', file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  }

  const onSubmit = () => {
    createPost(form)
  }
  return (
    <div className='main-app_wrapper'>
      <Navbar />
        <div className='main-app'>
          <div className='blog-post'>
            <p className='title'>Create New Blog Post</p>
            <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))}/>
            <Upload onChange={(e) => onImageUpload(e)} img={imgPreview}/>
            <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))}/>
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