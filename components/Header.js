import Link from "next/link"

export default function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				<Link href="/" className="text-xl font-medium">
					luke van
				</Link>
				<nav className="flex gap-8">
					<Link href="/projects" className="hover:opacity-75 transition-opacity">
						projects
					</Link>
					<Link href="/app" className="hover:opacity-75 transition-opacity">
						blog
					</Link>
					<Link href="/about" className="hover:opacity-75 transition-opacity">
						about
					</Link>
				</nav>
			</div>
		</header>
	)
}
