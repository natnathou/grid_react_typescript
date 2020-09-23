import React, { createContext, useContext, Reducer, useReducer } from 'react';
import { intitialState, State } from './initialState';
import { Action } from './actions';

interface Provider {
	reducer: Reducer<State, Action>;
	intitialState: State;
	children?: any;
}

const Context = createContext<{
	state: State;
	dispatch: React.Dispatch<Action>;
}>({
	state: intitialState,
	dispatch: () => null
});

export const StateProvider = ({
	reducer,
	intitialState,
	children
}: Provider) => {
	const [state, dispatch] = useReducer(reducer, intitialState);
	return (
		<Context.Provider value={{ state, dispatch }}>
			{children}
		</Context.Provider>
	);
};

export const useDispatch = () => {
	const context = useContext(Context);
	return context.dispatch;
};
export const useGlobalState = () => {
	const context = useContext(Context);
	return context.state;
};
