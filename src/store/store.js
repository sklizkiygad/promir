import { createStore } from 'redux';

function OPEN_MODAL(value) {
    return {
        type: 'OPEN_MODAL',
        value: value
    };
}


function reducer(state, action) {
    switch(action.type) {
        case OPEN_MODAL: return { value: action.value };

        default: return state;
    }
}

const store = createStore(reducer);

export default store;