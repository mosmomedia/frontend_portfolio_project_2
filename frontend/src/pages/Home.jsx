import Feedback from '../pages/Feedback';
import { FeedbackProvider } from '../contexts/feedback/FeedbackContext';

function Home() {
	return (
		<FeedbackProvider>
			<Feedback />
		</FeedbackProvider>
	);
}

export default Home;
