import Layout from "../components/Layout"

export default function Home() {
	return (
		<Layout>
			<div className="h-screen flex items-center justify-center bg-gradient-to-t from-primary to-secondary">
				<div className="text-center text-white">
					<h1 className="text-6xl font-bold mb-4">Technical Notes</h1>
					<p className="text-xl mb-8 font-serif">
						This is where I write about <span className="italic">everything</span>.
					</p>
					<a
						href="/pages"
						className="bg-white text-accent px-6 py-3 rounded-lg font-semibold
                        hover:bg-slate-100 transition-all duration-300"
					>
						View Pages
					</a>
				</div>
			</div>
		</Layout>
	)
}

