import { createContext, useReducer, useContext } from 'react';
import FeedbackReducer from './FeedbackReducer';

const FeedbackContext = createContext();

function FeedbackProvider({ children }) {
	const initialState = {
		feedbackList: [],
		currentFeedback: null,
		editMode: false,
		isLoading: false,
	};

	const [state, dispatch] = useReducer(FeedbackReducer, initialState);

	return (
		<FeedbackContext.Provider value={{ ...state, dispatch }}>
			{children}
		</FeedbackContext.Provider>
	);
}

function useFeedbackContext() {
	return useContext(FeedbackContext);
}

export { FeedbackProvider, useFeedbackContext };
