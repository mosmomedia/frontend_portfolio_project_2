import FeedbackForm from '../components/feedback/FeedbackForm';
import FeedbackStats from '../components/feedback/FeedbackStats';
import FeedbackList from '../components/feedback/FeedbackList';
import FeedbackEditForm from '../components/feedback/FeedbackEditForm';

import { useFeedbackContext } from '../contexts/feedback/FeedbackContext';

function Feedback() {
	const { editMode } = useFeedbackContext();
	return (
		<>
			<FeedbackForm />
			<FeedbackStats />
			<FeedbackList />

			{editMode && <FeedbackEditForm />}
		</>
	);
}

export default Feedback;
