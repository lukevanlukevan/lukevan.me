import { useState, useEffect } from "react"
import Layout from "@/components/Layout"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

export default function Pages({ pages }) {
	return (
		<Layout>
			<div className="max-w-4xl mx-auto py-8 px-4">
				<h1 className="text-4xl font-bold mb-8 text-slate-800">Pages</h1>
				<div className="grid gap-4">
					{pages.map((page) => (
						<a
							key={page.slug}
							href={`/pages/${page.slug}`}
							className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg shadow-sm
							hover:shadow-md hover:from-white hover:to-slate-50 transition-all duration-300
							border border-slate-200"
						>
							<h2 className="text-2xl font-semibold mb-2 text-slate-800">{page.title}</h2>
							<p className="text-slate-600 font-serif">{page.excerpt}</p>
						</a>
					))}
				</div>
			</div>
		</Layout>
	)
}

export async function getStaticProps() {
	const pagesDirectory = path.join(process.cwd(), "pages", "content")
	const filenames = fs.readdirSync(pagesDirectory)

	const pages = filenames.map((filename) => {
		const filePath = path.join(pagesDirectory, filename)
		const fileContents = fs.readFileSync(filePath, "utf8")
		const { data, content } = matter(fileContents)

		return {
			slug: filename.replace(".md", ""),
			title: data.title || "Untitled",
			excerpt: data.excerpt || content.slice(0, 150) + "...",
			...data,
		}
	})

	return {
		props: {
			pages,
		},
	}
}

