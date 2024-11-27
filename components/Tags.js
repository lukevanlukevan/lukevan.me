import Link from "next/link"

export default function Tags({ tags }) {
	if (!tags || tags.length === 0) return null

	return (
		<div className="flex gap-2 flex-wrap">
			{tags.map((tag) => (
				<Link key={tag} href={`/tags/${tag}`} className="text-sm text-white px-3 py-1 bg-accent rounded-full transition-colors">
					#{tag}
				</Link>
			))}
		</div>
	)
}

