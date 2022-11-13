import { NavLink } from './NavLink';

export const Nav = () => {
	return (
		<nav>
			<NavLink exact href="/">
				Welcome
			</NavLink>
			<NavLink exact href="/code">Code</NavLink>
			<NavLink exact href="/techitems">Tech Items</NavLink>
			<NavLink exact href="/members">Members</NavLink>
		</nav>
	);
};
