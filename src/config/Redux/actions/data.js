import * as api from '../../../utils/ApiFetch';

export const getBlogs = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchBlogs(page);
        dispatch({ type: 'DATA_UPDATE', payload: data.data });
        dispatch({ 
            type: 'UPDATE_PAGE', 
            payload: {
                currentPage: data.current_page, 
                totalPage: Math.ceil(data.total_data / data.total_pages)
            }
        })
    } catch (error) {
        console.log(error);
    }
}