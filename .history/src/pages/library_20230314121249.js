import react from 'react'
import styles from '@/styles/Home.module.css'
import MenuAppBar from '../../components/navbar'

export default function Library(){
    return(
        <div classname={styles.container}>
            
        <MenuAppBar 
          user={session?.user}
          onSignIn={signIn}
          onSignOut={signOut}
          src={session?.user?.image}
        />
            <h1>Library</h1>
        </div>
    )
}