/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import { Nav } from '../../components/Nav';
import { SiteTitle } from '../../components/SiteTitle';
import { DynamicHead } from '../../components/DynamicHead';
import axios from 'axios';
import styles from '../../styles/Members.module.scss';

interface IProps {
	members: any[];
}

const url = 'https://edwardtanguay.vercel.app/share/employees.json';

export async function getStaticProps() {
    const members = (await axios.get(url)).data;
    return {
        props: {
            members
        },
        revalidate: 600
    };
}

export async function getStaticPaths() {
    const members: any[] = (await axios.get(url)).data;
    const paths = members.map((member) => ({
        params: { id: String(member.employeeID) }
    }));
    return {
        paths,
        fallback: true
    };
}

const Members = (props: IProps) => {
	const { members } = props;
	const router = useRouter();
	const id = router.query['id'];
	let member: any = {};
	let paths = [];
	if (members !== undefined) {
		member = members.find((m) => m.employeeID === Number(id));
		paths = members.map((m) => ({ id: String(m.employeeID) }));
	}
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
					The data on this page is loaded via getStaticProps() and so
					is{' '}
					<a href="https://nextjs.org/docs/basic-features/data-fetching/overview">
						static-site generation (SSG)
					</a>
					.
				</code>
				<div className={styles.singleMember}>
					<img
						src={`https://edwardtanguay.netlify.app/share/images/employees/employee_${member.employeeID}.jpg`}
						alt={`member: ${member.firstName} ${member.lastName}`}
					/>
					<div className={styles.info}>
						<div className={styles.name}>
							{member.firstName} {member.lastName}
						</div>
						<div className={styles.notes}>{member.notes}</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Members;