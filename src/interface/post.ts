/**
 * ブログ記事の型
 */
export type Post = {
  slug: string
  title: string
  content: string
  tags: string[]
  date: string
  published: boolean
}
