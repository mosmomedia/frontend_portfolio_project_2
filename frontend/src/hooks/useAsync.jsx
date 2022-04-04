import { useReducer, useEffect } from 'react';

const dataFetchReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_INIT':
			return { ...state, isLoading: true, isError: false };

		case 'FETCH_SUCCESS':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			};

		case 'FETCH_FAILURE':
			return {
				...state,
				isLoading: false,
				isError: true,
			};

		default:
			throw new Error();
	}
};

function useAsync(callback, deps = []) {
	const initialState = {
		data: null,
		isLoading: false,
		isError: false,
	};

	const [state, dispatch] = useReducer(dataFetchReducer, initialState);

	const fetchData = async () => {
		dispatch({ type: 'FETCH_INIT' });
		try {
			const data = await callback();
			dispatch({ type: 'FETCH_SUCCESS', payload: data });
		} catch (error) {
			dispatch({ type: 'FETCH_FAILURE' });
		}
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line
	}, deps);

	return [state, fetchData];
}

export default useAsync;
