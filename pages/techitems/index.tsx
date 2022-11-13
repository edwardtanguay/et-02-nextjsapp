/* eslint-disable react/no-unescaped-entities */
import { SiteTitle } from '../../components/SiteTitle';
import { Nav } from '../../components/Nav';
import { NavLink } from '../../components/NavLink';
import { DynamicHead } from '../../components/DynamicHead';
import techItems from '../../data/techItems.json';
import styles from '../../styles/TechItem.module.scss';

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
								<NavLink className={styles.main} exact href={`techitems/${techItem.id}`}>
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
