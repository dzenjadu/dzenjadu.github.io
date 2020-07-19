import {
    CATEGORIES_LOADED,
    DATA_LOADED,
    DETAILS_LOADED
} from "../const/const";

const initState = {
    data: {},
    categories : {},
    details: {}
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case DATA_LOADED:
            return {...state, data: action.payload}
        case CATEGORIES_LOADED:
            return {...state, categories: action.payload}
        case DETAILS_LOADED:
            return {...state, details: action.payload}
        default:
            return state
    }
}

export default reducer;