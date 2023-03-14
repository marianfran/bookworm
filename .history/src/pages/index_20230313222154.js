import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import MenuAppBar from '../../components/navbar'
import styles from '@/styles/Home.module.css'
import ButtonApp from '../../components/button'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Bookworm App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/bookwormtwo.png" />
      </Head>

      <MenuAppBar />

      <main className={styles.main}> 
        <Image
          className={styles.wormimage}
          src="/Worm.png"
          width={300}
          height={250}
          alt="Bookworm Logo"
        />

        <div className={styles.heading}>
          <h1>Bookworm</h1>
          <h2>Keep track of the books you read</h2>
        </div>

        <ButtonApp 
          className={styles.button}
          name="Get Started"
        />



      </main>


    </div>
  )
}