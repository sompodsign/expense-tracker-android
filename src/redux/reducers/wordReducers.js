import {
    WORD_LIST_REQUEST,
    WORD_LIST_SUCCESS,
    WORD_LIST_FAIL,

    WORD_DETAIL_REQUEST,
    WORD_DETAIL_SUCCESS,
    WORD_DETAIL_FAIL,

    WORD_DELETE_REQUEST,
    WORD_DELETE_SUCCESS,
    WORD_DELETE_FAIL,
    WORD_DELETE_RESET,

    WORD_CREATE_REQUEST,
    WORD_CREATE_SUCCESS,
    WORD_CREATE_FAIL,
    WORD_CREATE_RESET, WORD_LIST_RESET,

} from "../constants/wordConstants";

//WORD list reducer
export const wordListReducer = (state = { words: [] }, action) => {
    switch (action.type) {
        case WORD_LIST_REQUEST:
            return { loading: true, words: [] };

        case WORD_LIST_SUCCESS:
            return {
                loading: false,
                words: action.payload,
            };

        case WORD_LIST_FAIL:
            return {
                loading: false, error: action.payload
            };

        case WORD_LIST_RESET:
            return { loading: false, words: [] };

        default:
            return state;

    }
};

// //WORD detail reducer
// export const WORDDetailReducer = (state = { WORD: {} }, action) => {
//     switch (action.type) {
//         case WORD_DETAIL_REQUEST:
//             return { loading: true, products: [] };

//         case WORD_DETAIL_SUCCESS:
//             return {
//                 loading: false,
//                 WORD: action.payload,
//             };

//         case WORD_DETAIL_FAIL:
//             return {
//                 loading: false, error: action.payload
//             };

//         default:
//             return state;

//     }
// };

// //WORD delete reducer
// export const WORDDeleteReducer = (state = { WORD: {} }, action) => {
//     switch (action.type) {
//         case WORD_DELETE_REQUEST:
//             return { loading: true }

//         case WORD_DELETE_SUCCESS:
//             return {
//                 loading: false,
//                 success: true,
//             };

//         case WORD_DELETE_FAIL:
//             return {
//                 loading: false, error: action.payload
//             };

//         case WORD_DELETE_RESET:
//             return {}

//         default:
//             return state;

//     }
// };

//WORD create reducer
export const wordCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case WORD_CREATE_REQUEST:
            return { loading: true, }

        case WORD_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                createdWord: action.payload
            };

        case WORD_CREATE_FAIL:
            return {
                loading: false, error: action.payload,
            };

        case WORD_CREATE_RESET:
            return {};

        default:
            return state;

    }
};
