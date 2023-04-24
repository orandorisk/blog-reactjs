const initialStateHome = {
    name: 'orlando'
}

export default function GlobalReducers(state = initialStateHome, action) {
    switch (action.type) {
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