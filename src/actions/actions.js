export const ADD_WORD = 'ADD_WORD';

export const addWord = (word) => {
    return {
        type: ADD_WORD,
        word
    }; 
};

export const addRemoteWord = (word) => {
    // TODO: Use dispatch(), instead of alert().
    return dispatch => {
        // Note: Here you can dispatch your loading action.
        fetch("/api/get_word/", {
            method: "POST",
        })
        .then((res) => res.json())
        .then((data) => { dispatch(addWord(data.word)) })
    };
}