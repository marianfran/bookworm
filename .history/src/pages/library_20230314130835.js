import react from 'react'
import styles from '@/styles/Home.module.css'
import MenuAppBar from '../../components/navbar'
import { useSession, signIn, signOut } from "next-auth/react"

import { prisma } from '../server/db/client'

export default function Library({posts}){

    const { data: session } = useSession()

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
        posts
      }
    }
  }