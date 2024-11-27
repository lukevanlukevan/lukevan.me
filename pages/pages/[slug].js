import Layout from "@/components/Layout"
import Tags from "@/components/Tags"
import { getPostBySlug, getAllPosts } from "@/lib/api"

export default function BlogPost({ post }) {
	return (
		<Layout>
			<div className="max-w-4xl mx-auto px-6 py-8">
				<h1 className="text-4xl font-medium mb-4">{post.title}</h1>
				<Tags tags={post.tags} />
				<div className="mt-8 prose prose-lg font-serif">{post.content}</div>
			</div>
		</Layout>
	)
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug)
	return {
		props: { post },
	}
}

export async function getStaticPaths() {
	const posts = getAllPosts()
	return {
		paths: posts.map((post) => ({
			params: { slug: post.slug, content: post.content },
		})),
		fallback: false,
	}
}

