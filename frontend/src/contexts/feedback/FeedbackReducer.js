function FeedbackReducer(state, action) {
	switch (action.type) {
		case 'GET_ALL_FEEDBACK':
		case 'CREATE_FEEDBACK':
		case 'UPDATE_FEEDBACK':
		case 'DELETE_FEEDBACK':
			return {
				...state,
				feedbackList: action.payload,
				isLoading: false,
			};

		case 'LOADING':
			return {
				...state,
				isLoading: true,
			};

		case 'ON_EDITMODE':
			return {
				...state,
				currentFeedback: action.payload,
				editMode: true,
			};

		case 'OFF_EDITMODE':
			return {
				...state,
				currentFeedback: null,
				editMode: false,
			};

		default:
			throw new Error();
	}
}

export default FeedbackReducer;
