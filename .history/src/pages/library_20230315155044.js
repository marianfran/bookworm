import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import MenuAppBar from '../../components/navbar'

export default function Library({posts}){

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

        </div>
    )
}
