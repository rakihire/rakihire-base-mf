import React from 'react'
import { Suspense } from 'react'

export default async function Page() {
    const data = await fetch('https://api.vercel.app/blog', {timeout: 6000})
    const posts = await data.json()
    return (
        <Suspense fallback={<div>Loading...</div>}>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      </Suspense>
    )
  }