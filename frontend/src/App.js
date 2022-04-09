import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import { AuthProvider } from './contexts/auth/AuthContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from 'twin.macro';
import BaseStyles from './styles/BaseStyles';

import Header from './components/Header';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
	return (
		<AuthProvider>
			<GlobalStyles />
			<BaseStyles />
			<Router>
				<Header />
				<div className="max-w-3xl m-auto py-5">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/sign-in" element={<SignIn />} />
						<Route path="/sign-up" element={<SignUp />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>

					<Navbar />
				</div>
				<ToastContainer autoClose={2500} />
			</Router>
		</AuthProvider>
	);
}

export default App;
