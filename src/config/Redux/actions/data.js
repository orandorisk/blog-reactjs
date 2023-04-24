import * as api from '../../../utils/ApiFetch';

export const getBlogs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBlogs();
        dispatch({ type: 'DATA_UPDATE', payload: data.data });
    } catch (error) {
        console.log(error);
    }
}