import {TOGGLE_SIDEBAR} from './actions';

const initialState = {
    sidebarToggle: false
}

export default function learningsReducer(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_SIDEBAR: {
            return {...state, sidebarToggle: !state.sidebarToggle}
        }
        default: {
            return state;
        }
    }
    return state;
}