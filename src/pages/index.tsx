import Head from "next/head";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { RootState } from "@/store";
import { decrement, increment, incrementByAmount } from "@/store/counter-slice";
import Button from "@/components/button";

const Home: FC = () => {
	const { t } = useTranslation();
	const counterValue = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a>{t("home")}</a>
							</li>
							<li>
								<a>{t("products")}</a>
								<ul className="p-2">
									<li>
										<a>{t("HelloWork")}</a>
									</li>
									<li>
										<a>{t("Interview Training")}</a>
									</li>
								</ul>
							</li>
							<li>
								<a>{t("solutions")}</a>
								<ul className="p-2">
									<li>
										<a>跨境猎头</a>
									</li>
									<li>
										<a>代理招聘</a>
									</li>
									<li>
										<a>劳务派遣</a>
									</li>
									<li>
										<a>灵活用工</a>
									</li>
									<li>
										<a>企业培训</a>
									</li>
								</ul>
							</li>

							<li>
								<a>{t("contacts")}</a>
							</li>
							<li>
								<a>{t("aboutUS")}</a>
							</li>
						</ul>
					</div>
					<a className="btn btn-ghost normal-case text-xl">{t("shortName")}</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a>{t("home")}</a>
						</li>
						<li tabIndex={0}>
							<details>
								<summary>{t("products")}</summary>
								<ul className="p-2">
									<li>
										<a>{t("HelloWork")}</a>
									</li>
									<li>
										<a>{t("Interview Training")}</a>
									</li>
								</ul>
							</details>
						</li>
						<li tabIndex={0}>
							<details>
								<summary>{t("solutions")}</summary>
								<ul className="p-2">
									<li>
										<a>跨境猎头</a>
									</li>
									<li>
										<a>代理招聘</a>
									</li>
									<li>
										<a>劳务派遣</a>
									</li>
									<li>
										<a>灵活用工</a>
									</li>
									<li>
										<a>企业培训</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<a>{t("contacts")}</a>
						</li>
						<li>
							<a>{t("aboutUS")}</a>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a>语言</a>
						</li>
						<li tabIndex={0}>
							<details>
								<summary>{t("Theme")}</summary>
								<ul className="p-2">
									<li>
										<a>{t("Light")}</a>
									</li>
									<li>
										<a>{t("Dark")}</a>
									</li>
									<li>
										<a>{t("cupcake")}</a>
									</li>
								</ul>
							</details>
						</li>
					</ul>
					<a className="btn">{t("contacts")}</a>
				</div>
			</div>

			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">{t("introduction")}</h1>
						<p className="mb-5">{t("briefIntroduce")}</p>
						<button className="btn btn-primary">{t("Get Started")}</button>
					</div>
				</div>
			</div>

			{/* <div>
				<button className="btn">Hello daisyUI</button>
				<Head>
					<title>Made with ❤️ by Sajid</title>
				</Head>
				<h1 className="text-3xl font-bold underline">{t("welcome")}</h1>

				<div>
					<Button
						className="px-6 py-1 border hover:bg-gray-100 m-4 rounded"
						onClick={() => dispatch(decrement())}
					>
						-
					</Button>
					<span className="m-6 p-6">{counterValue}</span>
					<Button
						className="px-6 py-1 border hover:bg-gray-100 m-4 rounded"
						onClick={() => dispatch(increment())}
					>
						+
					</Button>
					<Button
						className="px-6 py-1 border hover:bg-gray-100 m-4 rounded"
						onClick={() => dispatch(incrementByAmount(5))}
					>
						+5
					</Button>
				</div>
			</div> */}

			{/* advantages */}
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content text-center text-neutral-content">
					<div className="">
						<h1 className="text-5xl font-bold">{t("Our Advantages")}</h1>
						<div className="flex flex-row m-10 flex-wrap justify-center">
							<div className="card shadow-md bg-primary text-primary-content m-5 w-30">
								<div className="card-body">
									<h2 className="card-title">Notification 1</h2>
									<p>You have 3 unread messages. Tap here to see.</p>
								</div>
							</div>
							<div className="card shadow bg-primary text-primary-content m-5 w-30">
								<div className="card-body">
									<h2 className="card-title">Notification 2</h2>
									<p>You have 3 unread messages. Tap here to see.</p>
								</div>
							</div>
							<div className="card shadow-sm bg-primary text-primary-content m-5 w-30">
								<div className="card-body">
									<h2 className="card-title">Notification 3</h2>
									<p>You have 3 unread messages. Tap here to see.</p>
								</div>
							</div>
							<div className="card shadow-md bg-primary text-primary-content m-5 w-30">
								<div className="card-body">
									<h2 className="card-title">Notification 1</h2>
									<p>You have 3 unread messages. Tap here to see.</p>
								</div>
							</div>
							<div className="card shadow bg-primary text-primary-content m-5 w-30">
								<div className="card-body">
									<h2 className="card-title">Notification 2</h2>
									<p>You have 3 unread messages. Tap here to see.</p>
								</div>
							</div>
							<div className="card shadow-sm bg-primary text-primary-content m-5 w-30">
								<div className="card-body">
									<h2 className="card-title">Notification 3</h2>
									<p>You have 3 unread messages. Tap here to see.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
						className="max-w-sm rounded-lg shadow-2xl"
						alt="feature"
					/>
					<div>
						<h1 className="text-5xl font-bold">Box Office News!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
							quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Hello there</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
							quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>

			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
						className="max-w-sm rounded-lg shadow-2xl"
						alt="feature"
					/>
					<div>
						<h1 className="text-5xl font-bold">Box Office News!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
							quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>

			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Hello there</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
							quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>

			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
						className="max-w-sm rounded-lg shadow-2xl"
						alt="feature"
					/>
					<div>
						<h1 className="text-5xl font-bold">Box Office News!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
							quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>

			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Hello there</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
							quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>

			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
						className="max-w-sm rounded-lg shadow-2xl"
						alt="feature"
					/>
					<div>
						<h1 className="text-5xl font-bold">Box Office News!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
							quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>

			<div className="carousel w-full">
				<div id="item1" className="carousel-item w-full">
					<img
						src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
						className="w-full"
					/>
				</div>
				<div id="item2" className="carousel-item w-full">
					<img
						src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
						className="w-full"
					/>
				</div>
				<div id="item3" className="carousel-item w-full">
					<img
						src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
						className="w-full"
					/>
				</div>
				<div id="item4" className="carousel-item w-full">
					<img
						src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
						className="w-full"
					/>
				</div>
			</div>

			<div className="flex justify-center w-full py-2 gap-2">
				<a href="#item1" className="btn btn-xs">
					1
				</a>
				<a href="#item2" className="btn btn-xs">
					2
				</a>
				<a href="#item3" className="btn btn-xs">
					3
				</a>
				<a href="#item4" className="btn btn-xs">
					4
				</a>
			</div>

			<footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
				<nav className="grid grid-flow-col gap-4">
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Jobs</a>
					<a className="link link-hover">Press kit</a>
				</nav>
				<nav>
					<div className="grid grid-flow-col gap-4">
						<a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current"
							>
								<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
							</svg>
						</a>
						<a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current"
							>
								<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
							</svg>
						</a>
						<a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current"
							>
								<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
							</svg>
						</a>
					</div>
				</nav>
				<aside>
					<p>版权所有 © 2023 - 北京海帆远航科技发展有限公司</p>
				</aside>
			</footer>
		</>
	);
};

export async function getServerSideProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}

export default Home;
