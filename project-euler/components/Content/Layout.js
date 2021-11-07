import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import s from "../../styles/Layout.module.css";

const Layout = ({ children }) => (
	<div className={s.container}>
		<main>
			<NavBar />
			<section className={s.content}>
				{children}
			</section>
		</main>
		<Footer />
	</div>
);

export default Layout;
