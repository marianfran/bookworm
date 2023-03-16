import { prisma } from '../../server/db/client'
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import axios from "axios";

/* Components */
import PostForm from '../../components/postform'
import MenuAppBar from '../../components/navbar'
import { Book } from '../../components/book'

export default function Library({posts}){

    /* Session */
    const { data: session } = useSession()

    /* Posts */
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

        </div>
    )
}
