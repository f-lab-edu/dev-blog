import dayjs from 'dayjs'

import { GetArticleInterface } from '@/src/interface/response/GetArticleResponseInterface'

import DeleteBtn from './DeleteBtn'

interface IProps {
  article: GetArticleInterface
}

const Article = ({ article: { title, _id, updatedAt, content } }: IProps) => {
  return (
    <div>
      <h2>제목: {title}</h2>
      <DeleteBtn id={_id} />
      <div>수정 일자: {dayjs(updatedAt).format('YYYY-MM-DD')}</div>
      <div>내용: {content}</div>
    </div>
  )
}

export default Article