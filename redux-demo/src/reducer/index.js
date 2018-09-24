import {INC_NUM, DEC_NUM} from '../action/index';

export default function reducer(state = {num : 0}, action){
    switch(action.type){
        case INC_NUM:
            let num = state.num + 1;
            return {num};
        case DEC_NUM:
            num = state.num - 1;
            return {num};
        default:
            return state;
    }
    
}