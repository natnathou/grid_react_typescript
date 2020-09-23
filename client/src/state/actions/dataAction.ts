import server from '../../api/server';
import { ActionTypes, DataActions } from '.';
import { Action } from './actions';
import { AxiosResponse } from 'axios';

export interface Line {
	title: string;
	picture: string;
	price: number;
	description: string;
	date: string;
	id: number;
}

export interface Data {
	line: Line;
	subLine?: Data;
}

export const fetchData = async (dispatch: React.Dispatch<Action>) => {
	let response: AxiosResponse<Data[]>;
	response = await server.get<Data[]>('data');
	const action: Action = {
		type: ActionTypes.DATA,
		action: DataActions.FETCH_DATA,
		payload: response.data
	};

	dispatch(action);
};
