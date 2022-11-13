import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

interface IProps {
	href: string;
	exact: boolean;
	children: React.ReactNode;
	className?: string;
}

export const NavLink = (props: IProps) => {
	const { href, exact, children, className } = props;
	const { pathname } = useRouter();
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	if (isActive && className !== undefined) {
		props.className += ' active';
	}

	return (
		<Link legacyBehavior href={href}>
			<a {...props}>{children}</a>
		</Link>
	);
};

// NavLink.propTypes = {
// 	href: PropTypes.string.isRequired,
// 	exact: PropTypes.bool,
// };

// NavLink.defaultProps = {
// 	exact: false,
// };
