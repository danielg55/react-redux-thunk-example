export const ADD_WORD = 'ADD_WORD';
export const ADD_REMOTE_WORD = 'ADD_REMOTE_WORD';

export const addWord = (word) => {
    return {
        type: ADD_WORD,
        word
    }; 
};

export const addRemoteWord = (word) => {
    // TODO: Use dispatch(), instead of alert().
    return dispatch => {
        fetch("/api/get_word/", {
            method: "POST",
        })
        .then((res) => res.json())
        .then((data) => { alert( JSON.stringify( data ) ) })
    };
}