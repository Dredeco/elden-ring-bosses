"use client"

import styles from './page.module.css'
import Header from './components/Header'
import Bosses from './components/Bosses'

export default function Home() {
    return (
      <main className={styles.main}>
        <Header />
        <Bosses />
      </main>
    )
  }