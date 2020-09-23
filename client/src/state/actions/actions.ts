import { fetchData } from '../actions';
export enum ActionTypes {
	DATA = 'DATA'
}

export enum DataActions {
	FETCH_DATA = 'FETCH_DATA'
}

export interface Action {
	type: ActionTypes;
	action: DataActions;
	payload?: any;
}

export const Actions = {
	fetchData: (dispatch: React.Dispatch<Action>) => fetchData(dispatch)
};
