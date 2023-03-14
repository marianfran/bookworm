import React from 'react'
import Head from 'next/head'
import MenuAppBar from '../../components/navbar'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Bookworm App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Bookwormlogo.png" />
      </Head>

      <MenuAppBar />

      <main className={styles.main}>
        <Image src='/Bookworm.svg' alt='Bookworm Logo' width={200} height={200} />
      </main>


    </div>
  )
}