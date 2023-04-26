const initialState = {
    form: {
        title: '',
        body: '',
        image: '',
    },
    imgPreview: null
}

export default function createBlogReducers(state = initialState, action ) {
    switch (action.type) {
        case 'SET_FORM_DATA': {
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.formType]: action.formValue
                }
            }
        }
        case 'SET_IMG_PREVIEW': {
            return {
                ...state,
                imgPreview: action.payload
            }
        }
        default:
            return state;
    }
}