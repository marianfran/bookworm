import styles from '@/styles/Home.module.css'
import MenuAppBar from '../../components/navbar'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Library(props){

    /* Session */
    const { data: session } = useSession()

    /* Creating Posts */
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [posts, setPosts] = useState(props.posts)

    // Add a use effect in case the posts change when routing to the home page
    useEffect(() => {
        setPosts(props.posts)
        }, [props.posts])
        
        const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('/api/posts', { title, content })
        setPosts([...posts, res.data])
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
                    <input type="text" placeholder='book title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea placeholder='content' value={content} onChange={(e) => setContent(e.target.value)} />
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}

