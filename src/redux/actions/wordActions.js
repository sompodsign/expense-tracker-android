import client from "../../config";
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

    WORD_CREATE_REQUEST,
    WORD_CREATE_SUCCESS,
    WORD_CREATE_FAIL,
} from "../constants/wordConstants";
import {QUIZ_LIST_FAIL} from "../constants/quizConstants";

//action to load WORDs from server
export const listWords = (limit=0, offset=0, word_prefix="") => async (dispatch, getState) => {
    try {
        dispatch({ type: WORD_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Token ${userInfo.token}`
            },
        }

        const { data } = await client.get(`/words/?offset=${offset}&limit=${limit}&word_prefix=${word_prefix}`, config);


        dispatch({
            type: WORD_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: WORD_LIST_FAIL,
            payload: error
        });

    }
};


// export const listWords = (offset=1, limit=100) => async (dispatch, getState) => {
//     try {
//         dispatch({ type: WORD_LIST_REQUEST });
//
//         const {
//             userLogin: { userInfo },
//         } = getState()
//
//         const config = {
//             headers: {
//                 'Content-type': 'application/json',
//                 Authorization: `Token ${userInfo.token}`
//             },
//         }
//
//         const { data } = await client.get(`/words/?offset=&limit=`, config);

//
//         dispatch({
//             type: WORD_LIST_SUCCESS,
//             payload: data,
//         });
//     } catch (error) {
//         dispatch({
//             type: WORD_LIST_FAIL,
//             payload: error
//         });
//
//     }
// };


// //action to pull WORD detail based on WORD id
// export const WORDDetail = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: WORD_DETAIL_REQUEST });

//         const { data } = await axios.get(`https://jsonplaceholder.typicode.com/WORDs/${id}`);

//         dispatch({
//             type: WORD_DETAIL_SUCCESS,
//             payload: data,
//         });
//     } catch (error) {
//         dispatch({
//             type: WORD_DETAIL_FAIL,
//             payload: error
//         });
//     }
// };

//action to create a WORD
export const createWord = (newWord) => async (dispatch, getState) => {

    try {
        dispatch({ type: WORD_CREATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Token ${userInfo.token}`
            },
        }

        const { data } = await client.post('/words/', newWord, config);

        dispatch({
            type: WORD_CREATE_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: WORD_CREATE_FAIL,
            payload: {"status": error.response, "data": error.response}
        });
    }

};

// //action to delete a WORD by id
// export const deleteWORD = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: WORD_DELETE_REQUEST });

//         const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/WORDs/${id}`);

//         dispatch({
//             type: WORD_DELETE_SUCCESS,
//             payload: data,
//         });
//     } catch (error) {
//         dispatch({
//             type: WORD_DELETE_FAIL,
//             payload: error
//         });
//     }
// };
