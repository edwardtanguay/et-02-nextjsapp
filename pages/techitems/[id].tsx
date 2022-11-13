/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Nav } from '../../components/Nav';
import { SiteTitle } from '../../components/SiteTitle';
import { DynamicHead } from '../../components/DynamicHead';
import axios from 'axios';
import * as qstr from '../../qtools/qstr';
import styles from '../../styles/TechItem.module.scss';

const url = 'https://edwardtanguay.vercel.app/share/techItems.json';

const TechItems = () => {
	const [techItem, setTechItem] = useState<any>({});
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) return;
		const id = router.query['id'];
		(async () => {
			const _techItems = (await axios.get(url)).data;
			console.log(_techItems);
			const _techItem = _techItems.find((m: any) => String(m.id) === id);
			if (_techItem) {
				_techItem.description = qstr.getQuickDefinitionFromExtras(
					_techItem.extras
				);
				setTechItem(_techItem);
			}
		})();
	}, [router.isReady]);

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
				<code className={styles.main}>
					The data on this page is loaded via useEffect/axios (much as
					with create-react-app and Vite) and so can be considered{' '}
					<a href="https://nextjs.org/docs/basic-features/data-fetching/overview">
						client-side rendering (CSR)
					</a>
					.
				</code>
				{Object.entries(techItem).length > 0 && (
					<>
						<h2 className={styles.main}>{techItem.title}</h2>
						<p className={styles.description}>
							{techItem.description}
						</p>
						<p>
							<a
								target="_blank"
								href={`https://onespace.pages.dev/techitems?id=${techItem.id}`}
								rel="noreferrer"
								className={styles.moreInfo}
							>
								get more info
							</a>
						</p>
					</>
				)}
			</section>
		</>
	);
};

export default TechItems;
