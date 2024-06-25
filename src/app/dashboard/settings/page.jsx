'use client' // 错误组件必须是客户端组件

import { useRouter } from 'next/navigation'

export default function Page() {
	const router = useRouter()
	router.push('/dashboard', { scroll: false })
	return <h1>Hello, Settings!</h1>
}
