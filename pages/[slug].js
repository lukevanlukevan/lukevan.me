import Link from "next/link"
import Head from "next/head"
import Header from "../components/Header"
import Tags from "../components/Tags"

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=serif:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="min-h-screen bg-gray-100 pt-16">
				<Header />
				<main className="font-serif">{children}</main>
			</div>
		</>
	)
}

