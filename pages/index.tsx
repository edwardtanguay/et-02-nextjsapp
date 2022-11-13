/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import styles from '../styles/Index.module.scss';
import { Nav } from '../components/Nav';
import { SiteTitle } from '../components/SiteTitle';
import { DynamicHead } from '../components/DynamicHead';

const Home: NextPage = () => {
	return (
		<>
			<section className="siteHeader">
				<DynamicHead/>
				<SiteTitle />
				<Nav />
			</section>
			<section className="sitePage">
				<p className={styles.normal}>image goes here</p>
			</section>
		</>
	);
};

export default Home;
