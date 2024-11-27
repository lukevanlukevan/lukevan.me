import fs from "fs"
import path from "path"
import matter from "gray-matter"

// ...existing code...

export function getAllPosts() {
	const files = fs.readdirSync(path.join(process.cwd(), "posts"))

	return files.map((filename) => {
		const slug = filename.replace(".md", "")
		const fileContent = fs.readFileSync(path.join(process.cwd(), "posts", filename), "utf-8")
		const { data, content } = matter(fileContent)

		return {
			slug,
			title: data.title,
			tags: data.tags || [],
			excerpt: data.excerpt,
			...data,
		}
	})
}

// ...existing code...
