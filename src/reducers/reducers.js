import {ADD_WORD} from '../actions/actions';

const initialState = {words: []};

export const listReducer = (state = initialState, action) => {
    if (action.type === ADD_WORD) {
        let words = state.words.slice();
        words.push(action.word);
        console.log({words: words});
        return {words: words};
    } else {
        return initialState;
    }
}
