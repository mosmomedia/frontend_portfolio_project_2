import axios from 'axios';
import firebase from '../../config/firebase';

const API_URL = 'api/feedback/';

const createPayloadHeader = async () => {
	const user = firebase.auth.currentUser;
	try {
		if (user) {
			const token = await user.getIdToken();

			if (!token) {
				throw new Error('not token exists');
			}

			const payloadHeader = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			return payloadHeader;
		}
	} catch (error) {
		console.log(error);
	}
};

//  get all feedback
export const getAllFeedback = async () => {
	try {
		const res = await axios.get(API_URL);

		return res.data;
	} catch (error) {
		console.log(error);
	}
};

//  delete a feedback
export const deleteFeedback = async (id) => {
	try {
		const header = await createPayloadHeader();
		if (header && window.confirm('Are you sure?')) {
			const res = await axios.delete(API_URL + id, header);
			return res.data;
		}
	} catch (error) {
		console.log(error);
	}
};
