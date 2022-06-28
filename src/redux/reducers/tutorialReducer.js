import {
    TUTORIAL_LIST_REQUEST,
    TUTORIAL_LIST_SUCCESS,
    TUTORIAL_LIST_FAIL,
    TUTORIAL_LIST_RESET,


    TUTORIAL_CREATE_REQUEST,
    TUTORIAL_CREATE_SUCCESS,
    TUTORIAL_CREATE_FAIL,
    TUTORIAL_CREATE_RESET,

    TUTORIAL_RETRIEVE_REQUEST,
    TUTORIAL_RETRIEVE_SUCCESS,
    TUTORIAL_RETRIEVE_FAIL,
    TUTORIAL_RETRIEVE_RESET,


    TUTORIAL_LIST_TAGS_REQUEST,
    TUTORIAL_LIST_TAGS_FAIL,
    TUTORIAL_LIST_TAGS_SUCCESS,

} from "../constants/tutorialConstants";


//Tutorial list reducer
export const tutorialListReducer = (state = {tutorials: []}, action) => {
    switch (action.type) {
        case TUTORIAL_LIST_REQUEST:
            return {loading: true, tutorials: []};

        case TUTORIAL_LIST_SUCCESS:
            return {
                loading: false,
                tutorials: action.payload,
            };

        case TUTORIAL_LIST_FAIL:
            return {
                loading: false, error: action.payload.response
            };

        case TUTORIAL_LIST_RESET:
            return {loading: false, tutorials: []};

        default:
            return state;

    }
};

export const tutorialCreateReducer = (state = {tutorial: []}, action) => {
    switch (action.type) {
        case TUTORIAL_CREATE_REQUEST:
            return {loading: true, tutorial: []};

        case TUTORIAL_CREATE_SUCCESS:
            return {
                loading: false,
                tutorial: action.payload,
                success: true
            };

        case TUTORIAL_CREATE_FAIL:
            return {
                loading: false, error: action.payload
            };

        case TUTORIAL_CREATE_RESET:
            return {loading: false, tutorial: []};

        default:
            return state;

    }
};

export const tutorialRetrieveReducer = (state = {post: []}, action) => {
    switch (action.type) {
        case TUTORIAL_RETRIEVE_REQUEST:
            return {loading: true, post: []};

        case TUTORIAL_RETRIEVE_SUCCESS:
            return {
                loading: false,
                post: action.payload,
            };

        case TUTORIAL_RETRIEVE_FAIL:
            return {
                loading: false, error: action.payload.response
            };

        case TUTORIAL_RETRIEVE_RESET:
            return {loading: false, post: []};

        default:
            return state;

    }
};


export const tutorialAllTagsReducer = (state = {tags: []}, action) => {
    switch (action.type) {
        case TUTORIAL_LIST_TAGS_REQUEST:
            return {loading: true, tags: []};

        case TUTORIAL_LIST_TAGS_SUCCESS:
            return {
                loading: false,
                tags: action.payload,
            };

        case TUTORIAL_LIST_TAGS_FAIL:
            return {
                loading: false, error: action.payload.response
            };

        case TUTORIAL_LIST_RESET:
            return {loading: false, tags: []};

        default:
            return state;

    }
};
