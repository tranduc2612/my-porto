import { motion } from "framer-motion";
import Stack from "./stack";
import Tools from "./tools";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-4 p-10 grid grid-cols-1 mt-10">
			<motion.div
				className="flex justify-center items-center flex-col mb-5 "
				initial={{
					opacity: 0,
					x: -200,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				transition={{
					delay: 0.5,
					type: "spring",
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Skills() {
	return (
		<>
			<Wrapper>
				<section className="grid gap-8 md:gap-12">
					<div className="text-center space-y-2">
						<h2 className="text-3xl font-bold mt-3 text-black">
							Skills and Expertise
						</h2>
						<p className="text-muted-foreground max-w-[800px] mx-auto">
							Explore some skills I&apos;m proficient in to
							deliver high-quality solutions.
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
						<div className="flex flex-col items-center gap-2">
							<CodepenIcon className="w-12 h-12" />
							<div className="font-medium">Web Development</div>
						</div>
						<div className="flex flex-col items-center gap-2">
							<WebhookIcon className="w-12 h-12" />
							<div className="font-medium">REST API</div>
						</div>
						<div className="flex flex-col items-center gap-2">
							<ActivityIcon className="w-12 h-12" />
							<div className="font-medium">Machine Learning</div>
						</div>
						<div className="flex flex-col items-center gap-2">
							<MobileIcon className="w-12 h-12" />
							<div className="font-medium">
								Mobile Development
							</div>
						</div>
						{/* <div className="flex flex-col items-center gap-2">
					<CloudIcon className="w-12 h-12" />
					<div className="font-medium">Cloud Computing</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<BarChartIcon className="w-12 h-12" />
					<div className="font-medium">Data Analysis</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<ComputerIcon className="w-12 h-12" />
					<div className="font-medium">Cybersecurity</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<PackageIcon className="w-12 h-12" />
					<div className="font-medium">Product Management</div>
				</div> */}
					</div>
				</section>
			</Wrapper>
			<div className=" mx-auto container gap-4 p-10 grid grid-cols-1 md:grid-cols-2 mt-10 mb-24">
				<Stack />
				<Tools />
			</div>
		</>
	);
}

function ActivityIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
		</svg>
	);
}
function CodepenIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
			<line x1="12" x2="12" y1="22" y2="15.5" />
			<polyline points="22 8.5 12 15.5 2 8.5" />
			<polyline points="2 15.5 12 8.5 22 15.5" />
			<line x1="12" x2="12" y1="2" y2="8.5" />
		</svg>
	);
}

function WebhookIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
			<path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
			<path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
		</svg>
	);
}

function MobileIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
			<line x1="12" x2="12" y1="18" y2="18" />
		</svg>
	);
}
