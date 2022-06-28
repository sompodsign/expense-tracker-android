import client from "../../config";

import {
    TUTORIAL_LIST_REQUEST,
    TUTORIAL_LIST_SUCCESS,
    TUTORIAL_LIST_FAIL,

    TUTORIAL_CREATE_REQUEST,
    TUTORIAL_CREATE_SUCCESS,
    TUTORIAL_CREATE_FAIL,

    TUTORIAL_RETRIEVE_REQUEST,
    TUTORIAL_RETRIEVE_SUCCESS,
    TUTORIAL_RETRIEVE_FAIL,

    TUTORIAL_LIST_TAGS_REQUEST,
    TUTORIAL_LIST_TAGS_FAIL,
    TUTORIAL_LIST_TAGS_SUCCESS,

} from "../constants/tutorialConstants";

//action to load tutorials from server
export const listTutorials = (tag='') => async (dispatch) => {

    try {
        dispatch({type: TUTORIAL_LIST_REQUEST});

        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        }

        const {data} = await client.get(`/tutorials/?tag=${tag}`, config);
        // console.log('action', data)

        dispatch({
            type: TUTORIAL_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TUTORIAL_LIST_FAIL,
            payload: error
        });
    }
};


export const tutorialCreate = (tutorialData) => async (dispatch, getState) => {

    try {
        dispatch({type: TUTORIAL_CREATE_REQUEST});

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Token ${userInfo.token}`
            },
        }

        const { data } = await client.post('/tutorials/', tutorialData, config);

        dispatch({
            type: TUTORIAL_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TUTORIAL_CREATE_FAIL,
            payload: error
        });
    }
};


export const retrieveTutorialAction = (slug) => async (dispatch) => {

    try {
        dispatch({type: TUTORIAL_RETRIEVE_REQUEST});

        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        }

        const {data} = await client.get(`/tutorials/${slug}`, config);

        dispatch({
            type: TUTORIAL_RETRIEVE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TUTORIAL_RETRIEVE_FAIL,
            payload: error
        });
    }
};

export const getAllTags = () => async (dispatch) => {

    try {
        dispatch({type: TUTORIAL_LIST_TAGS_REQUEST});

        const {data} = await client.get('/tutorial-tags/');

        dispatch({
            type: TUTORIAL_LIST_TAGS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TUTORIAL_LIST_TAGS_FAIL,
            payload: error
        });
    }
};
