import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";
import { NICKNAME } from "@/ultis/constant";

export const metadata = {
    title: `${NICKNAME} | Portofolio`,

    description:
		`My name is ${NICKNAME}, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.`,

    author: "Kevin Tran",
    siteUrl: "#",
    applicationName: NICKNAME,

    keywords: [
		NICKNAME,
	],

    openGraph: {
		type: "website",
		url: "www",
		title: `${NICKNAME} | Portofolio`,
		site_name: `${NICKNAME} | Portofolio`,
		description: `My name is ${NICKNAME}, This is my portofolio website.`,
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: `${NICKNAME} Portofolio`,
			},
		],
		site_name: `${NICKNAME} | Portofolio`,
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				{/* <Chat /> */}
				<Analytics />
			</body>
		</html>
	);
}
