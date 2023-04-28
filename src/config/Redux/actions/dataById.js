import * as api from '../../../utils/ApiFetch';

export const getBlogById = (id) => async (dispatch) => {
    try {
        const { data } = await api.getPostById(id);
        dispatch({ type: 'DATA_BY_ID', payload: data.data });
    } catch (error) {
        console.log(error);
    }
}