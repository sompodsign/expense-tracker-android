import client from "../../config";
import {
    DICTIONARY_WORD_REQUEST,
    DICTIONARY_WORD_SUCCESS,
    DICTIONARY_WORD_FAIL,

    DICTIONARY_WORD_UPDATE_REQUEST,
    DICTIONARY_WORD_UPDATE_SUCCESS,
    DICTIONARY_WORD_UPDATE_FAIL,
} from "../constants/dictionaryConstants";

// action to fetch a word from server
export const retrieveDictWord = (word) => async (dispatch) => {

    try {
        dispatch({ type: DICTIONARY_WORD_REQUEST });

        const { data } = await client.get(`/dictionary/${word}`);

        dispatch({
            type: DICTIONARY_WORD_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: DICTIONARY_WORD_FAIL,
            payload: {"status": error.response, "data": error.response}
        });
    }
};

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

// //action to create a WORD
// export const createWORD = (WORD) => async (dispatch) => {
//     console.log(WORD)
//     try {
//         dispatch({ type: WORD_CREATE_REQUEST });

//         const { data } = await axios.WORD('https://jsonplaceholder.typicode.com/WORDs/', WORD);

//         dispatch({
//             type: WORD_CREATE_SUCCESS,
//             payload: data,
//         });
//     } catch (error) {
//         dispatch({
//             type: WORD_CREATE_FAIL,
//             payload: error
//         });
//     }
// };

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
