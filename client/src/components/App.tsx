import React from 'react';
import { StateProvider } from '../state/StateContext';
import { Grid } from './Grid';
import { reducer } from '../state/reducers';
import { intitialState } from '../state/initialState';
import '../style/App.css';

export const App = () => {
	return (
		<StateProvider reducer={reducer} intitialState={intitialState}>
			<div className='App'>
				<Grid />
			</div>
		</StateProvider>
	);
};
