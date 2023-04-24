const initialState = {
    data: [],
    page: {
        currentPage: 1,
        totalPage: 1,
    }
}

export default function data(state = initialState, action) {
    switch (action.type) {
        case 'DATA_UPDATE': {
            return {
                // copy the state
                ...state,
                // override the loading property
                data: action.payload,
            }
        }
        case 'UPDATE_PAGE': {
            return {
                ...state,
                page: action.payload
            }
        }
        default:
            return state;
    }
}