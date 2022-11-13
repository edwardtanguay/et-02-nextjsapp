/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import styles from '../styles/Index.module.scss';
import { Nav } from '../components/Nav';
import { SiteTitle } from '../components/SiteTitle';
import { DynamicHead } from '../components/DynamicHead';
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<>
			<section className="siteHeader">
				<DynamicHead />
				<SiteTitle />
				<Nav />
			</section>
			<section className="sitePage">
				<p className={styles.normal}>Welcome to this site.</p>
				<Image
				 	className={styles.normal}
					src="/images/screenWithCode.jpg"
					alt="screen with code"
					width={400}
					height={264}
					objectFit="contain"
				/>
			</section>
		</>
	);
};

export default Home;
