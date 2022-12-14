/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { SiteTitle } from '../../components/SiteTitle';
import { Nav } from '../../components/Nav';
import { DynamicHead } from '../../components/DynamicHead';
import axios from 'axios';
import router from 'next/router';
import styles from '../../styles/Members.module.scss';

interface IProps {
	members: any[];
}

const url = 'https://edwardtanguay.vercel.app/share/employees.json';

export async function getServerSideProps() {
	const members:any[] = (await axios.get(url)).data;
	return {
		props: {
			members,
		},
	};
}

const handleClickMember = (member:any) => {
	router.push(`/members/${member.employeeID}`);
};

export default function Members(props:IProps) {
	const { members } = props;
	return (
		<>
			<section className="siteHeader">
				<DynamicHead
					title="Members"
					description="Lots of code People who make the tech resource site run."
					icon="user.ico"
				/>
				<SiteTitle />
				<Nav />
			</section>
			<section className="sitePage">
				<code>
					The data on this page is loaded via getServerSideProps() and
					so is{' '}
					<a href="https://nextjs.org/docs/basic-features/data-fetching/overview">
						server-side rendering (SSR)
					</a>
					.
				</code>
				<h2>There are {members.length} members:</h2>
				<div className={styles.members}>
					{members.map((member, index) => {
						return (
							<div
								key={index}
								className={styles.member}
								onClick={() => handleClickMember(member)}
							>
								<img
									className={styles.main}
									src={`https://edwardtanguay.vercel.app/share/images/employees/employee_${member.employeeID}.jpg`}
									alt={`member: ${member.firstName} ${member.lastName}`}
								/>
								<div className={styles.info}>
									<div className={styles.name}>
										{member.firstName} {member.lastName}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
}
