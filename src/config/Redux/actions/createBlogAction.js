import * as api from '../../../utils/ApiFetch';

export const setForm = (formType, formValue) => {
    return {
        type: 'SET_FORM_DATA',
        formType,
        formValue
    }
}

export const setImgPreview = (payload) => {
    return {
        type: 'SET_IMG_PREVIEW',
        payload
    }
}

export const createPost = async (form) => {
    const data = new FormData();
    data.append('title', form.title);
    data.append('body', form.body);
    data.append('image', form.image);

    try{
        const response = await api.createPost(data,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log('response: ', response);
    } catch (error) {
        console.log('error: ', error);
    }
}