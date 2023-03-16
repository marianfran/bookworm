import styles from '@/styles/Home.module.css'
import MenuAppBar from '../../components/navbar'
import { useSession, signIn, signOut } from "next-auth/react"


export default function Library(props){

    /* Session */
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
                <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", maxWidth: "400px"}}>
                    <input type="text" placeholder='book title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea placeholder='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}

