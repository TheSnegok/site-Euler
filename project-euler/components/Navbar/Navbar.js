import { useRouter } from "next/router";
import s from "../../styles/Navbar.module.css";
import Link from "next/link";

const navigation = [
	{ id: 1, title: "Home", path: "/" },
	{ id: 2, title: "Project 1", path: "/project-one" },
	{ id: 3, title: "Project 2", path: "/project-second" },
	{ id: 4, title: "Project 3", path: "/project-third" },
	{ id: 5, title: "Project 4", path: "/project-fourth" },
	{ id: 6, title: "Project 5", path: "/project-fiveth" },
	{ id: 7, title: "Project 6", path: "/project-sixth" },
	{ id: 8, title: "Project 7", path: "/project-seventh" },
	{ id: 9, title: "Project 8", path: "/project-eighth" },
	{ id: 10, title: "Project 9", path: "/project-nineth" },
	{ id: 11, title: "Project 10", path: "/project-tenth" },
];

const NavBar = () => {
	const { pathname } = useRouter();
	return (
		<nav className={s.navigation}>
			<div className={s.menu}>
				{navigation.map(({ id, title, path }) => (
					<Link href={path} key={id}>
						<a
							className={
								pathname === path ? s.linkActive : s.link
							}
						>
							{title}
						</a>
					</Link>
				))}
			</div>
		</nav>
	);
};

export default NavBar;
