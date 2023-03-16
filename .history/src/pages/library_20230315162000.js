import { prisma } from '../../server/db/client'
import axios from "axios";
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

/*Components*/
import MenuAppBar from '../../components/navbar'
import PostForm from '../pages/PostForm'
import { Book } from './postBook'

export default function Library({posts}){

    /* Session */
    const { data: session } = useSession()

    /* Post */
    const handleSubmit = async ({ title, author }) => {
        const { data } = await axios.post('/api/posts', {
            title,
            author,
        })
        console.log(data)
    }

    return(
    <div classname={styles.container}>
        <MenuAppBar 
            user={session?.user}
            onSignIn={signIn}
            onSignOut={signOut}
            src={session?.user?.image}
        />

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
               
    </div>

    )
}
