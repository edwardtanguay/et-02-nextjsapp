/* eslint-disable react/no-unescaped-entities */
import { SiteTitle } from '../../components/SiteTitle';
import { Nav } from '../../components/Nav';
import { NavLink } from '../../components/NavLink';
import { DynamicHead } from '../../components/DynamicHead';
import _techItems from '../../data/techItems.json';
import styles from '../../styles/TechItem.module.scss';
import * as qstr from '../../qtools/qstr';

const techItems = _techItems;
// const techItems = qstr.randomize(_techItems);
// NOTE: If you randomize this array, you get the error on the first reload of the page:
// Error: Text content does not match server - rendered HTML.
// See more info here: https://nextjs.org/docs/messages/react-hydration-error

const Code = () => {
	return (
		<>
			<section className="siteHeader">
				<DynamicHead
					title="Useful Code"
					description="Lots of code examples"
					icon="code.ico"
				/>
				<SiteTitle />
				<Nav />
			</section>
			<section className="sitePage">
				<code>
					The data on this page is loaded via a static JSON file and
					can be considered{' '}
					<a href="https://stackoverflow.com/questions/68891963/loading-content-from-a-static-json-next-js">
						static site generation (SSG)
					</a>
					.
				</code>
				<ul>
					{techItems.map((techItem, index) => {
						return (
							<li key={index}>
								<NavLink
									className={styles.main}
									exact
									href={`techitems/${techItem.id}`}
								>
									{techItem.title}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</section>
		</>
	);
};

export default Code;
