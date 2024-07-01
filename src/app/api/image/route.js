import { redirect } from 'next/navigation'

export async function GET() {
	const res = await fetch('https://api.thecatapi.com/v1/images/search', {
		next: { revalidate: 5 },
	})
	const data = await res.json()
	console.log(data)
	return Response.json(data)
	// redirect('https://nextjs.org/')
}
