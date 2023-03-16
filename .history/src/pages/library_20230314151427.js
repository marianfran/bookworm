import styles from '@/styles/Home.module.css'
import MenuAppBar from '../../components/navbar'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'
import axios from 'axios'

export default function Library({posts}){

    /* Session */
    const { data: session } = useSession()

    /* Creating Posts */
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [books, setBooks] = useState(props.books)

    // Add a use effect in case the posts change when routing to the home page
    useEffect(() => {
    setBooks(props.books)
    }, [props.books])

    const handleSubmit = async ({title, author, genre, content}) => {
        const { data } = await axios.post('/api/posts', {
            title,
            author,
            genre,
            content
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
                <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", maxWidth: "400px"}}>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}
