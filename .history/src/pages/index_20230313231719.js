import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import MenuAppBar from '../../components/navbar'
import styles from '@/styles/Home.module.css'
import ButtonApp from '../../components/button'
import { useRouter }  from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {

  const router = useRouter()

  const { data: session } = useSession()

  if (session) {
  return (
    <div className={styles.container}>

      <Head>
        <title>Bookworm App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/bookwormtwo.png" />
      </Head>

      <MenuAppBar 
          user={session?.user}
          onSignIn={signIn}
          onSignOut={signOut}
          src={session?.user?.image}
      />

      <main className={styles.main}> 
        <Image
          className={styles.wormimage}
          src="/Worm.png"
          width={300}
          height={250}
          alt="Bookworm Logo"
        />

        <div className={styles.heading}>
          <h1 className={styles.title}>Bookworm</h1>
          <h3 className={styles.subheading}>Keep track of the books you read</h3>
        </div>

        <ButtonApp 
          className={styles.button}
          name="Get Started"
          onClick={()=>router.push('/profile')}
        />



      </main>


    </div>
  )
}
}