const initialState = {
    datas: [],
    name: 'orlando'
}

export default function data(state = initialState, action) {
    switch (action.type) {
        case 'DATA_UPDATE': {
            return {
                // copy the state
                ...state,
                // override the loading property
                datas: action.payload,
            }
        }
        case 'UPDATE_NAME': {
            return {
                // copy the state
                ...state,
                // override the loading property
                name: 'riski'
            }
        }
        default:
            return state;
    }
}