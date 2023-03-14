import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import MenuAppBar from '../../components/navbar'
import styles from '@/styles/Home.module.css'

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
          src="/worm.png"
          width={300}
          height={300}
          alt="Bookworm Logo"
        />
      </main>


    </div>
  )
}