import { prisma } from '../../server/db/client'
import styles from '@/styles/Home.module.css'
import PostForm from '../pages/PostForm'
import axios from "axios";
import { Book } from './postBook'

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
    <div>
        <h1>Library</h1>
    </div>

    <main className={styles.main}>
          <div>
              <h2>Create your Reading List</h2>
                <PostForm onSubmit={handleSubmit} />

              {posts.map((post) => (
                <Book key={post.id} name={post.title} author={post.book} />
              ))}
          </div>
    </main>
    </>
  )
}

export async function getServerSideProps() {
    const posts = await prisma.post.findMany()
    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),
      },
    }
  }
