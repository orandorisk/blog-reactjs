const initialState = {
    data: []
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
        default:
            return state;
    }
}