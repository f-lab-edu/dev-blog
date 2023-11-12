'use client'

import { useRouter } from 'next/navigation'

import { ArticleInterface } from '@/apis/articles'
import { API_URL } from '@/constants/common'

import ArticleForm from '@/components/ArticleForm'

const WritePage = () => {
  const router = useRouter()

  const handleSubmit = async (article: ArticleInterface) => {
    const { title, content } = article

    if (!title || !content) {
      alert('Title and content are required')
      return
    }

    try {
      const res = await fetch(`${API_URL}/api/articles`, {
        method: 'POST',
        headers: {
          Content: 'application/json',
        },
        body: JSON.stringify({ title, content }),
      })

      if (res.ok) {
        router.push('/')
      } else {
        throw new Error('Failed to create an article')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ArticleForm
      title={''}
      content={{ text: '', html: '' }}
      onSubmit={handleSubmit}
    />
  )
}

export default WritePage
