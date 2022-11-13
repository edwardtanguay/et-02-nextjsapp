/* eslint-disable react/no-unescaped-entities */
import { SiteTitle } from '../components/SiteTitle';
import { Nav } from '../components/Nav';
import styles from '../styles/Code.module.scss';
import { DynamicHead } from '../components/DynamicHead';

const Code = () => {
	return (
		<>
			<section className="siteHeader">
				<DynamicHead title="Useful Code" description="Lots of code examples" icon="code.ico"/>
				<SiteTitle />
				<Nav />
			</section>
			<section className="sitePage">
				<p className={styles.normal}>code examples will appear here</p>
			</section>
		</>
	);
};

export default Code;
