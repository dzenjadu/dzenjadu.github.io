import {
    CATEGORIES_LOADED,
    DATA_LOADED,
    DETAILS_LOADED
} from "../const/const";

export const dataLoaded = (newData) => {
    return {
        type: DATA_LOADED,
        payload: newData
    }
}

export const categoriesLoaded = (newCategories) => {
    return {
        type: CATEGORIES_LOADED,
        payload: newCategories
    }
}

export const detailsLoaded = (newDetails) => {
    return {
        type: DETAILS_LOADED,
        payload: newDetails
    }
}