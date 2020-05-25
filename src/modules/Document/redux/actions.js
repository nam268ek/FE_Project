import * as Types from "./contants";
export const getDocs = (payload) => {
    return {
        type: Types.GET_DOCS,
        payload
    }
}
export const getDocsSuccess = (payload) => {
    return {
        type: Types.GET_DOCS_SUCCESS,
        payload
    }
}

export const getDocsCate = () => {
    return {
        type: Types.GET_DOCS_CATE
    }
}
export const getDocsCateSuccess = (payload) => {
    return {
        type: Types.GET_DOCS_CATE_SUCCESS,
        payload
    }
}
export const createDoc = (payload) => {
    return {
        type: Types.CREATE_DOC,
        payload
    }
}
export const createDocsSuccess = (payload) => {
    return {
        type: Types.CREATE_DOC_SUCCESS,
        payload
    }
}
export const updateDoc = (payload) => {
    return {
        type: Types.UPDATE_DOC,
        payload
    }
}
export const updateDocsSuccess = (payload) => {
    return {
        type: Types.UPDATE_DOC_SUCCESS,
        payload
    }
}
