'use client'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { ArticleInterface } from '@/apis/articles'

interface Props {
  contentHtml: ArticleInterface['content']['html']
}

const ArticleContent = ({ contentHtml }: Props) => {
  return <ReactQuill theme="bubble" value={contentHtml} readOnly />
}

export default ArticleContent
