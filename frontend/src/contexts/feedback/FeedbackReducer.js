function FeedbackReducer(state, action) {
	switch (action.type) {
		case 'GET_ALL_FEEDBACK':
			return {
				...state,
				feedbackList: action.payload,
				isLoading: false,
			};

		case 'CREATE_FEEDBACK':
			return {
				...state,
				feedbackList: action.payload,
				isLoading: false,
			};

		case 'UPDATE_FEEDBACK':
			return {
				...state,
				feedbackList: action.payload,
				isLoading: false,
			};

		case 'DELETE_FEEDBACK':
			return {
				...state,
				feedbackList: action.payload,
				isLoading: false,
			};

		case 'ON_EDITMODE':
			return {
				...state,
				currentFeedback: action.payload,
				editMode: true,
				isLoading: false,
			};

		case 'OFF_EDITMODE':
			return {
				...state,
				currentFeedback: null,
				editMode: false,
				isLoading: false,
			};

		default:
			return state;
	}
}

export default FeedbackReducer;
