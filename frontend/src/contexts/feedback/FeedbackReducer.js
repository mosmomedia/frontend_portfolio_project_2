function FeedbackReducer(state, action) {
	switch (action.type) {
		case 'GET_ALL_FEEDBACK':
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

		default:
			return state;
	}
}

export default FeedbackReducer;
