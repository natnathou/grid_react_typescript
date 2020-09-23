import { Data } from './actions';

export interface ListData {
	[id: number]: Data;
}

export interface State {
	data: ListData;
}

export const intitialState: State = {
	data: {}
};
