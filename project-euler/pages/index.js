import Head from "next/head";
import Euler from "../public/euler.jpg";
import s from "../styles/Home.module.css";
import Image from "next/image";

const Home = () => (
	<>
		<Head>
			<title>Eiler's Project Answers</title>
			<meta name="description" content="Eiler's Project Answers" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<h1 className={s.header}>Project Euler</h1>
		<h3 className={s.headerSite}>
			On this site you will find tasks and answers to Project Euler
		</h3>
		<div className={s.euler}>
			<p>
				“It is mathematics that gives the most reliable rules: whoever
				follows them is not dangerous to deceive the senses.” - Leonard
				Euler
			</p>
			<div className={s.imgEuler}>
				<Image src={Euler} alt="euler" objectFit="fill" />
			</div>
		</div>
		<p>
			These tasks are of varying degrees of complexity, and most of them
			involve inductive learning. That is, the next solved problem opens
			up something new that will allow you to get close to a previously
			inaccessible problem. In this way, a persistent project participant
			will slowly but surely move through the list of tasks.
		</p>
	</>
);

export default Home;
