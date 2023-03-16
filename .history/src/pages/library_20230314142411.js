import styles from '@/styles/Home.module.css'
import MenuAppBar from '../../components/navbar'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'

import { prisma } from '../../server/db/client'
import axios from 'axios'

export default function Library({posts}){

    /* Session */
    const { data: session } = useSession()

    /* Creating posts */
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('/api/posts', { title, content })
        console.log(res.data)
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

                <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", maxWidth: "400px"}}>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>

                {posts.map((post) => (
                    <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    </div>
                ))}
            </div>

        </div>
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