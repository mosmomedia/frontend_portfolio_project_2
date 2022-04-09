import Card from '../../shared/Card';
import { FaEdit, FaTimes } from 'react-icons/fa';

import { useAuthContext } from '../../contexts/auth/AuthContext';
import { useFeedbackContext } from '../../contexts/feedback/FeedbackContext';
import { deleteFeedback } from '../../contexts/feedback/FeedbackAction';

import {
	ItemRatingStyles,
	ItemTextStyles,
	ItemButtonStyles,
} from '../../styles/FeedbackStyles';

import { toast } from 'react-toastify';

function FeedbackItem({ item }) {
	const curruntUser = useAuthContext();
	const { feedbackList, dispatch } = useFeedbackContext();

	const { rating, text, _id, userFirebase } = item;
	const handleEdit = () => {
		dispatch({ type: 'ON_EDITMODE', payload: item });
	};

	const handleDelete = async () => {
		const { success } = await deleteFeedback(_id);
		if (success) {
			const payload = feedbackList.filter((item) => item._id !== _id);
			dispatch({ type: 'DELETE_FEEDBACK', payload });
			toast.success('Item Deleted');
		}
	};

	return (
		<Card>
			<ItemRatingStyles className="">{rating}</ItemRatingStyles>
			{curruntUser && curruntUser.uid === userFirebase && (
				<>
					<ItemButtonStyles is_del_btn="is_del_btn" onClick={handleDelete}>
						<FaTimes color="#ec4899" />
					</ItemButtonStyles>
					<ItemButtonStyles is_edit_btn="is_edit_btn" onClick={handleEdit}>
						<FaEdit />
					</ItemButtonStyles>
				</>
			)}

			<ItemTextStyles>{text}</ItemTextStyles>
		</Card>
	);
}

export default FeedbackItem;
