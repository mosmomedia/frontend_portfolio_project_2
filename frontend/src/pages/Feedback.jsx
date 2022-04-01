import FeedbackForm from '../components/feedback/FeedbackForm';
import FeedbackStats from '../components/feedback/FeedbackStats';
import FeedbackList from '../components/feedback/FeedbackList';
import FeedbackEditForm from '../components/feedback/FeedbackEditForm';

import { useFeedbackContext } from '../contexts/feedback/FeedbackContext';

function Feedback() {
	const { editMode, isLoading } = useFeedbackContext();
	return (
		<>
			<FeedbackForm />
			<FeedbackStats />
			<FeedbackList />

			{editMode && !isLoading && <FeedbackEditForm />}
		</>
	);
}

export default Feedback;
