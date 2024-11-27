import Layout from "../components/Layout"
import Link from "next/link"
import { getAllPosts } from "../lib/api"

export default function TagPage({ posts, tag }) {
	return (
		<Layout>
			<div className="max-w-6xl mx-auto px-6 py-8">
				<h1 className="text-3xl font-medium mb-8">Posts tagged "{tag}"</h1>
				<div className="space-y-6">
					{posts.map((post) => (
						<Link key={post.slug} href={`/${post.slug}`} className="block hover:bg-gray-50 p-4 rounded-lg transition-colors">
							<h2 className="text-xl font-medium">{post.title}</h2>
							{post.excerpt && <p className="text-gray-600 mt-2">{post.excerpt}</p>}
						</Link>
					))}
				</div>
			</div>
		</Layout>
	)
}

export async function getStaticPaths() {
	const posts = getAllPosts()
	const tags = [...new Set(posts.flatMap((post) => post.tags || []))]

	return {
		paths: tags.map((tag) => ({ params: { tag } })),
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const posts = getAllPosts().filter((post) => post.tags && post.tags.includes(params.tag))

	return {
		props: {
			posts,
			tag: params.tag,
		},
	}
}
