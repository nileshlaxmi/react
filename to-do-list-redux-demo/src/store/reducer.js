import * as actionTypes from '../actions/actionTypes';

const initialState = {
    botList :[],
    isLoading: false
}

const fetchBotReducer = (state = initialState, action) => {
    const {type} = action;
    switch (type){
        case actionTypes.FETCH_ALL_BOTS:
            return {...state, isLoading: true};
        case actionTypes.FETCH_ALL_BOTS_SUCCESS:
            return {...state, isLoading: false, botList : action.payload};
        default: 
            return state;
    }
}

export default fetchBotReducer;