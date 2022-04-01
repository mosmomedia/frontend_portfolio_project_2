import Card from '../../shared/Card';
import { FaEdit, FaTimes } from 'react-icons/fa';

import { useAuthContext } from '../../contexts/auth/AuthContext';
import { useFeedbackContext } from '../../contexts/feedback/FeedbackContext';
import { deleteFeedback } from '../../contexts/feedback/FeedbackAction';
import { toast } from 'react-toastify';

function FeedbackItem({ item }) {
	const curruntUser = useAuthContext();
	const { feedbackList, dispatch } = useFeedbackContext();

	const { rating, text, _id, userFirebase } = item;
	const handleEdit = (params) => {};

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
			<div className="absolute  -top-2 -left-2 bg-[#ff6a95] text-white w-14 h-14 p-2 text-center rounded-full text-[1.5rem] border-solid border-[1px]  border-[#eee] delay-300">
				{rating}
			</div>
			{curruntUser && curruntUser.uid === userFirebase && (
				<>
					<button
						className="absolute top-2 right-2 cursor-pointer bg-none border-none "
						onClick={handleDelete}
					>
						<FaTimes color="#ec4899" />
					</button>
					<button
						className="absolute top-2 right-8 cursor-pointer bg-none border-none"
						onClick={handleEdit}
					>
						<FaEdit />
					</button>
				</>
			)}

			<div className=" text-xl text-slate-900">{text}</div>
		</Card>
	);
}

export default FeedbackItem;
