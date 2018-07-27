import { INC_NUMBER, DEC_NUMBER } from '../actions';

export default function performAction(state = { num: 0}, action) {
	switch(action.type) {
		case INC_NUMBER: 
			let num = state.num+1;
			return { num };
		case DEC_NUMBER: 
			num = state.num-1;
			return { num };
		default: 
			return state;
	}
}