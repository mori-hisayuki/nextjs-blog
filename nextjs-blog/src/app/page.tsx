import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Article } from './types'

const getArticles = async ()=> {
  const res = await fetch('http://localhost:3000/api/articles', {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw Error("Failed to fetch article")
  }

  const data = await res.json();
  return data.articles as Article[];

}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div>
      <h1>新着記事</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  )
}
