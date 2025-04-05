import Hr from "@/components/Hr";
import { motion } from "framer-motion";

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3"
					initial={{
						opacity: 0,
						x: -200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.7,

						type: "spring",
					}}>
					Profesional Experience
				</motion.h1>
			</div>
		</div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
			<motion.div
				className="flex justify-center items-start flex-col mb-5 "
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
				<section className="grid gap-8 md:gap-12">
					<div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
						{children}
					</div>
				</section>
			</motion.div>
		</div>
	);
}

export default function Experience() {
	return (
		<>
			<Title/>
			<Wrapper>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2024 - Present</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							Techvify
						</h3>
						<h4 className=" font-light text-md mb-4">
							Software engineer | Full-time
						</h4>
						<p className="text-justify">
							At Techvify, an outsourcing company, I worked on real-world projects, 
							gaining hands-on experience in software development and collaborating with international clients. 
							This role helped me enhance both my technical skills and teamwork in a fast-paced environment.
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								ReactJs
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								ExpressJs
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Nest.js
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Angular
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								MySql
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Postgresql
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Outsourcing
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2023 - 2024</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							Hyperlogy
						</h3>
						<h4 className=" font-light text-md mb-4">
							Intern fullstack developer | Part-time
						</h4>
						<p className="text-justify">
							As a Fullstack Intern at Hyperlogy, I was trained in React and .NET technologies. 
							I also had the opportunity to work onsite at a bank, where I learned about the software development process and improved my communication skills in a professional environment. 
						</p>

						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								.NET Core API
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								ReactJs
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Oracle
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Production
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Banking
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2022 - 2023</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							CodeGym HaNoi
						</h3>
						<h4 className=" font-light text-md mb-4">
							Teaching assistant | Part-time
						</h4>
						<p className="text-justify">
						As a teaching assistant, I helped students troubleshoot and fix bugs during lab sessions. 
						Through this role, 
						I developed effective communication and learned how to explain technical concepts in a clear and understandable way.
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								ReactJs
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Javascript
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								ExpressJs
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								MySql
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Communication
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
