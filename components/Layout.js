import Link from "next/link"
import Head from "next/head"

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="min-h-screen bg-gray-100">
				<nav className="bg-white shadow-lg">
					<div className="max-w-6xl mx-auto px-4">
						<div className="flex justify-between">
							<div className="flex space-x-7">
								<Link href="/" className="flex items-center py-4 px-2">
									<span className="font-semibold text-gray-500 text-lg">My Site</span>
								</Link>
								<div className="flex items-center space-x-1">
									<Link href="/pages" className="py-4 px-2 text-gray-500 hover:text-gray-900">
										Pages
									</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
				<main className="font-newsreader">{children}</main>
			</div>
		</>
	)
}
