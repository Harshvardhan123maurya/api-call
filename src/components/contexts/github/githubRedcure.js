import { CLEAR_USERS, SEARCH_USER, SET_LOADING } from "../types";

const githubReducer = (state, action) => {
    switch(action.type) {
        case SEARCH_USER:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        default:
            return state;
    }
}

export default githubReducer;