import fs from "fs"
import path from "path"
import matter from "gray-matter"

// ...existing code...

export function getAllPosts() {
	const files = fs.readdirSync(path.join(process.cwd(), "pages", "content"))

	return files.map((filename) => {
		const slug = filename.replace(".md", "")
		const fileContent = fs.readFileSync(path.join(process.cwd(), "pages", "content", filename), "utf-8")
		const { data, content } = matter(fileContent)

		return {
			slug,
			title: data.title,
			tags: data.tags || [],
			...data,
		}
	})
}

export function getPostBySlug(slug) {
	const filePath = path.join(process.cwd(), "pages", "content", `${slug}.md`)
	const fileContent = fs.readFileSync(filePath, "utf-8")
	const { data, content } = matter(fileContent)

	return {
		slug,
		content,
		title: data.title,
		tags: data.tags || [],
		...data,
	}
}

// ...existing code...

