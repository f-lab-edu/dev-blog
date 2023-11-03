import GetArticleResponseInterface from '@/src/interface/response/GetArticleResponseInterface'
import dayjs from 'dayjs'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

const getArticleById = async (
  id: string,
): Promise<GetArticleResponseInterface | undefined> => {
  try {
    const res = await fetch(`http://localhost:3000/api/articles/${id}`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch an article.')
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function ArticlePage({ params }: Params) {
  const { id } = params
  const data = await getArticleById(id)

  if (!data) return
  const {
    article: { title, content, updatedAt },
  } = data

  return (
    <div>
      <h2>제목: {title}</h2>
      <div>수정 일자: {dayjs(updatedAt).format('YYYY-MM-DD')}</div>
      <div>내용: {content}</div>
    </div>
  )
}
