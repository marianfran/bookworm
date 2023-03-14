import React from 'react'
import MenuAppBar from '../../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <MenuAppBar />
    </div>
  )
}