const initializeState = {
    dataById: []
}

export default function data(state = initializeState, action) {
    switch (action.type) {
        case 'DATA_BY_ID': {
            return {
                ...state,
                dataById: action.payload
            }
        }
        default:
            return state;
    }
}