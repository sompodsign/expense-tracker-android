import {
    QUIZ_LIST_REQUEST,
    QUIZ_LIST_SUCCESS,
    QUIZ_LIST_FAIL,
    QUIZ_LIST_RESET,

    QUIZ_RANGE_LIST_REQUEST,
    QUIZ_RANGE_LIST_SUCCESS,
    QUIZ_RANGE_LIST_FAIL,
    QUIZ_RANGE_LIST_RESET,

    QUIZ_ANSWER_SUBMIT_REQUEST,
    QUIZ_ANSWER_SUBMIT_SUCCESS,
    QUIZ_LIST_REMOVE_FAIL,
    QUIZ_ANSWER_SUBMIT_RESET,

    QUIZ_LIST_REMOVE_REQUEST,
    QUIZ_LIST_REMOVE_SUCCESS,
    QUIZ_LIST_UPDATE_FAIL, QUIZ_LIST_REMOVE_RESET,


} from "../constants/quizConstants";


//QUIZ list reducers
export const quizReducers = (state = [], action) => {
    switch (action.type) {
        case QUIZ_LIST_REQUEST:
            return {loading: true, quizList: []};

        case QUIZ_LIST_SUCCESS:
            return {
                loading: false,
                quizList: action.payload,
            };

        case QUIZ_LIST_FAIL:
            return {
                loading: false, error: action.payload
            };

        case QUIZ_LIST_RESET:
            return {
                dictWordMeaning: []
            };

        default:
            return state;

    }
};

//QUIZ range list reducers
export const quizRangeReducer = (state = [], action) => {
    switch (action.type) {
        case QUIZ_RANGE_LIST_REQUEST:
            return {loading: true, quizList: []};

        case QUIZ_RANGE_LIST_SUCCESS:
            return {
                loading: false,
                quizRangeList: action.payload,
            };

        case QUIZ_RANGE_LIST_FAIL:
            return {
                loading: false, error: action.payload
            };

        case QUIZ_RANGE_LIST_RESET:
            return {
                quizRangeList: []
            };

        default:
            return state;

    }
};

//QUIZ range list reducers
export const quizAnswerSubmitReducer = (state = {}, action) => {
    switch (action.type) {
        case QUIZ_ANSWER_SUBMIT_REQUEST:
            return {loading: true, answerResponse: {}};

        case QUIZ_ANSWER_SUBMIT_SUCCESS:
            return {
                loading: false,
                answerResponse: action.payload,
            };

        case QUIZ_LIST_REMOVE_FAIL:
            return {
                loading: false, error: action.payload.response
            };

        case QUIZ_ANSWER_SUBMIT_RESET:
            return {
                answerResponse: {}
            };

        default:
            return state;
    }
};

//QUIZ update reducer
export const quizRemoveReducer = (state = {}, action) => {
    switch (action.type) {
        case QUIZ_LIST_REMOVE_REQUEST:
            return {loading: true, status: {}};

        case QUIZ_LIST_REMOVE_SUCCESS:
            return {
                loading: false,
                status: action.payload,
                success: true
            };

        case QUIZ_LIST_REMOVE_FAIL:
            return {
                loading: false, error: action.payload.response
            };

        case QUIZ_LIST_REMOVE_RESET:
            return {};

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
