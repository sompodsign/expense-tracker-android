import client from "../../config";
import {
    QUIZ_LIST_REQUEST,
    QUIZ_LIST_SUCCESS,
    QUIZ_LIST_FAIL,

    QUIZ_RANGE_LIST_REQUEST,
    QUIZ_RANGE_LIST_SUCCESS,
    QUIZ_RANGE_LIST_FAIL,
    QUIZ_RANGE_LIST_RESET,

    QUIZ_ANSWER_SUBMIT_REQUEST,
    QUIZ_ANSWER_SUBMIT_SUCCESS,
    QUIZ_ANSWER_SUBMIT_FAIL,
    QUIZ_ANSWER_SUBMIT_RESET,

    QUIZ_LIST_REMOVE_REQUEST,
    QUIZ_LIST_REMOVE_SUCCESS,
    QUIZ_LIST_REMOVE_FAIL


} from "../constants/quizConstants";

// action to fetch a word from server
export const retrieveQuizList = () => async (dispatch, getState) => {

    try {
        dispatch({type: QUIZ_LIST_REQUEST});

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Token ${userInfo.token}`
            },
        }

        const {data} = await client.get("/vocabulary-quiz/", config);

        dispatch({
            type: QUIZ_LIST_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: QUIZ_LIST_FAIL,
            payload: {"status": error.response, "data": error.response}
        });
    }
};

export const retrieveQuizRangeList = (amountOfQuiz) => async (dispatch, getState) => {

    try {
        dispatch({type: QUIZ_RANGE_LIST_REQUEST});

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Token ${userInfo.token}`
            },
        }

        const {data} = await client.get(`/vocabulary-quiz/quiz-amount/${amountOfQuiz}`, config);

        dispatch({
            type: QUIZ_RANGE_LIST_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: QUIZ_RANGE_LIST_FAIL,
            payload: {"status": error.response, "data": error.response}
        });
    }
};

export const submitQuizAnswer = (answer) => async (dispatch, getState) => {

    try {
        dispatch({type: QUIZ_ANSWER_SUBMIT_REQUEST});

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Token ${userInfo.token}`
            },
        }

        const {data} = await client.get("/vocabulary-quiz/answer/", {headers: config.headers, params: {answer}});

        dispatch({
            type: QUIZ_ANSWER_SUBMIT_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: QUIZ_LIST_REMOVE_FAIL,
            payload: {"status": error.response, "data": error.response}
        });
    }
};

export const removeAllQuizzes = () => async (dispatch, getState) => {


    try {
        dispatch({type: QUIZ_LIST_REMOVE_REQUEST});

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Token ${userInfo.token}`
            },
        }

        const {data} = await client.delete("/vocabulary-quiz/remove-all", {headers: config.headers});

        dispatch({
            type: QUIZ_LIST_REMOVE_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: QUIZ_LIST_REMOVE_FAIL,
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
