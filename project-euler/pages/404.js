import { useEffect } from "react";
import { useRouter } from "next/router";
import s from "../styles/404.module.css";

const Error = () => {
	const router = useRouter();
	useEffect(() => {
	    setTimeout(() => {
	        router.push('/');
	    }, 3000)
	}, [router]);
	return (
		<div className={s.errorBlock}>
			<div className={s.textError}>
				<p>Ups!Page not found(</p>
			</div>
		</div>
	);
};
export default Error;
