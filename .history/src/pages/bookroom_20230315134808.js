import { prisma } from '../../server/db/client'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import PostForm from '../pages/PostForm'
import axios from "axios";
import { Confession } from '../pages/PostConfession'
import PostForm from '../pages/PostForm'


export default function Home({ posts }) {

const handleSubmit = async ({ name, confession }) => {
        const { data } = await axios.post('/api/posts', {
            name,
            confession,
        })
        console.log(data)
}

  return (
    <>
      <Head>
        <title>D3 Confessions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.bgyellow}>
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-blue-900">D3 Confessions</h1>
          </div>
      </header>
      <main className={styles.main}>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
              <h2 className="text-2xl font-bold tracking-tight text-blue-900">Confess your sins</h2>
          <PostForm onSubmit={handleSubmit} />


              {posts.map((post) => (
                <Confession key={post.id} name={post.name} confession={post.confession} date={post.createdAt} />
              ))}
          </div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {

  //newest posts first
  const posts = await prisma.post.findMany({
    orderBy: {  createdAt: 'desc' },
  })

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    }
  }
}