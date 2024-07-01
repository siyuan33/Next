import { NextResponse } from 'next/server'

export async function GET({ nextUrl }, { params }) {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data = await res.json()
	console.log(nextUrl, 'nextUrl')
	return NextResponse.json({ data })
}

export async function POST(request) {
	const article = await request.json()

	return NextResponse.json(
		{
			id: Math.random().toString(36).slice(-8),
			data: article,
		},
		{ status: 201 }
	)
}
