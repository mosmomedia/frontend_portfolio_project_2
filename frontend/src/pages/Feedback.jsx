import FeedbackForm from '../components/feedback/FeedbackForm';
import FeedbackStats from '../components/feedback/FeedbackStats';
import FeedbackList from '../components/feedback/FeedbackList';

function Feedback() {
	return (
		<>
			<FeedbackForm />
			<FeedbackStats />
			<FeedbackList />
		</>
	);
}

export default Feedback;
