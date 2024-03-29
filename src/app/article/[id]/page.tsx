import { notFound } from 'next/navigation'

import { getArticleById, GetArticleResponseInterface } from '@/apis/articles'
import ArticleRead from '@/containers/Article/Read'

const ArticleReadPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params

  const loadedArticle = async (): Promise<
    GetArticleResponseInterface | undefined
  > => {
    try {
      const res = await getArticleById(id)
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`)
      }

      return res.json()
    } catch (error) {
      console.log(error)
    }
  }

  const data = await loadedArticle()
  if (!data) return notFound()

  const { article } = data

  return <ArticleRead article={article} />
}
export default ArticleReadPage
