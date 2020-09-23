import { Action, ActionTypes } from '../actions';
import { dataReducer } from './dataReducer';
import { State } from '../initialState';

export const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case ActionTypes.DATA:
			return dataReducer.reduce(state, action);
		default:
			return { ...state };
	}
};
