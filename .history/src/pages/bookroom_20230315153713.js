import { prisma } from '../../server/db/client'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import PostForm from '../pages/PostForm'
import axios from "axios";
import { Confession } from './postConfession'

export default function Home({ posts }) {

const handleSubmit = async ({ title, author }) => {
        const { data } = await axios.post('/api/posts', {
            title,
            author,
        })
        console.log(data)
}

  return (
    <>
      <header className={styles.bgyellow}>
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-blue-900">Library</h1>
          </div>
      </header>

      <main className={styles.main}>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
              <h2 className="text-2xl font-bold tracking-tight text-blue-900">Confess your sins</h2>
          <PostForm onSubmit={handleSubmit} />


              {posts.map((post) => (
                <Confession key={post.id} name={post.name} author={post.confession} />
              ))}
          </div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
    const posts = await prisma.post.findMany()
    return {
      props: {
        posts: posts,
      },
    }
  }
