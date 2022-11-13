import { NavLink } from './NavLink';

export const Nav = () => {
	return (
		<nav>
			<NavLink exact href="/">
				Welcome
			</NavLink>
			<NavLink href="/code">Code</NavLink>
			<NavLink href="/techitems">Tech Items</NavLink>
		</nav>
	);
};
