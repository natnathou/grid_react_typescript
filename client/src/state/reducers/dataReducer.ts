import _ from 'lodash';
import { Action, DataActions } from '../actions';
import { State, ListData } from '../initialState';

export class dataReducer {
	static reduce(state: State, action: Action) {
		switch (action.action) {
			case DataActions.FETCH_DATA:
				return this.updateData(state, action);
			default:
				return { ...state };
		}
	}
	private static updateData(state: State, action: Action) {
		const payload: ListData = action.payload;
		return { ...state, data: { ..._.mapKeys(payload, 'id') } };
	}
}
