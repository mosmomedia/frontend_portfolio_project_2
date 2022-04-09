import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth/AuthContext';
import firebase from '../config/firebase';

import { toast } from 'react-toastify';
import { NavbarStyles, NavItemStyles } from '../styles/NavbarStyles';

function Navbar() {
	const userState = useAuthContext();

	const location = useLocation();
	const navigate = useNavigate();

	const handleLogout = () => {
		firebase.auth.signOut();
		toast.success('Bye Bye!');
		navigate('/');
	};

	return (
		<NavbarStyles>
			<nav className="w-full overflow-y-hidden">
				<ul>
					<li onClick={() => navigate('/about')}>
						<NavItemStyles path_name={location.pathname === '/about'}>
							About
						</NavItemStyles>
					</li>

					<li onClick={() => navigate('/')}>
						<NavItemStyles path_name={location.pathname === '/'}>
							Feedback
						</NavItemStyles>
					</li>

					{!userState ? (
						<li onClick={() => navigate('/sign-in')}>
							<NavItemStyles path_name={location.pathname === '/sign-in'}>
								Login
							</NavItemStyles>
						</li>
					) : (
						<li onClick={handleLogout}>
							<p className="logout">Logout</p>
						</li>
					)}
				</ul>
			</nav>
		</NavbarStyles>
	);
}

export default Navbar;
