import {
    DICTIONARY_WORD_REQUEST,
    DICTIONARY_WORD_SUCCESS,
    DICTIONARY_WORD_FAIL,

    DICTIONARY_WORD_UPDATE_REQUEST,
    DICTIONARY_WORD_UPDATE_SUCCESS,
    DICTIONARY_WORD_UPDATE_FAIL, DICTIONARY_WORD_RESET,

} from '../constants/dictionaryConstants'


//WORD list reducer
export const dictWordReducer = (state = { dictWordMeaning: {} }, action) => {
    switch (action.type) {
        case DICTIONARY_WORD_REQUEST:
            return { loading: true, dictWordMeaning: {} };

        case DICTIONARY_WORD_SUCCESS:
            return {
                loading: false,
                dictWordMeaning: action.payload,
            };

        case DICTIONARY_WORD_FAIL:
            return {
                loading: false, error: action.payload
            };

        case DICTIONARY_WORD_RESET:
            return {
                dictWordMeaning: {}
            };

        default:
            return state;

    }
};

//
// export const userRegisterReducer = (state = {}, action) => {
//     switch (action.type) {
//         case USER_REGISTER_REQUEST:
//             return { loading: true }
//
//         case USER_REGISTER_SUCCESS:
//             return { loading: false, userInfo: action.payload }
//
//         case USER_REGISTER_FAIL:
//             return { loading: false, error: action.payload }
//
//         case USER_LOGOUT:
//             return {}
//
//         default:
//             return state
//     }
// }
//
//
//
// export const userDetailsReducer = (state = { user: {} }, action) => {
//     switch (action.type) {
//         case USER_DETAILS_REQUEST:
//             return { ...state, loading: true }
//
//         case USER_DETAILS_SUCCESS:
//             return { loading: false, user: action.payload }
//
//         case USER_DETAILS_FAIL:
//             return { loading: false, error: action.payload }
//
//         case USER_DETAILS_RESET:
//             return { user: {} }
//
//
//         default:
//             return state
//     }
// }
//
//
// export const userUpdateProfileReducer = (state = {}, action) => {
//     switch (action.type) {
//         case USER_UPDATE_PROFILE_REQUEST:
//             return { loading: true }
//
//         case USER_UPDATE_PROFILE_SUCCESS:
//             return { loading: false, success: true, userInfo: action.payload }
//
//         case USER_UPDATE_PROFILE_FAIL:
//             return { loading: false, error: action.payload }
//
//         case USER_UPDATE_PROFILE_RESET:
//             return {}
//
//         default:
//             return state
//     }
// }
//
//
// export const userListReducer = (state = { users: [] }, action) => {
//     switch (action.type) {
//         case USER_LIST_REQUEST:
//             return { loading: true }
//
//         case USER_LIST_SUCCESS:
//             return { loading: false, users: action.payload }
//
//         case USER_LIST_FAIL:
//             return { loading: false, error: action.payload }
//
//         case USER_LIST_RESET:
//             return { users: [] }
//
//         default:
//             return state
//     }
// }
//
//
// export const userDeleteReducer = (state = {}, action) => {
//     switch (action.type) {
//         case USER_DELETE_REQUEST:
//             return { loading: true }
//
//         case USER_DELETE_SUCCESS:
//             return { loading: false, success: true }
//
//         case USER_DELETE_FAIL:
//             return { loading: false, error: action.payload }
//
//         default:
//             return state
//     }
// }
//
//
// export const userUpdateReducer = (state = { user: {} }, action) => {
//     switch (action.type) {
//         case USER_UPDATE_REQUEST:
//             return { loading: true }
//
//         case USER_UPDATE_SUCCESS:
//             return { loading: false, success: true }
//
//         case USER_UPDATE_FAIL:
//             return { loading: false, error: action.payload }
//
//         case USER_UPDATE_RESET:
//             return { user: {} }
//
//         default:
//             return state
//     }
// }
