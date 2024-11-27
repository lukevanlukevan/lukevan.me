import Layout from "../../components/Layout"
import fs from "fs"
import path from "path"
import { marked } from "marked"
import matter from "gray-matter"

export default function Page({ content, frontmatter }) {
	return (
		<Layout>
			<div className="max-w-4xl mx-auto py-8 px-4">
				<article
					className="prose lg:prose-xl prose-slate prose-h1:text-slate-800
          prose-p:text-slate-600 prose-p:font-newsreader prose-a:text-blue-600 hover:prose-a:text-blue-800
          prose-strong:text-slate-900"
				>
					<h1>{frontmatter.title}</h1>
					<div dangerouslySetInnerHTML={{ __html: content }} />
				</article>
			</div>
		</Layout>
	)
}

export async function getStaticPaths() {
	const pagesDirectory = path.join(process.cwd(), "pages/content")
	const filenames = fs.readdirSync(pagesDirectory)

	const paths = filenames.map((filename) => ({
		params: { slug: filename.replace(".md", "") },
	}))

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const filePath = path.join(process.cwd(), "pages/content", `${params.slug}.md`)
	const fileContents = fs.readFileSync(filePath, "utf8")
	const { data, content } = matter(fileContents)
	const htmlContent = marked(content)

	return {
		props: {
			content: htmlContent,
			frontmatter: data,
		},
	}
}
