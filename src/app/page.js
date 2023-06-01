"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Bosses from './components/bosses'
import { useEffect, useState } from 'react'
import getData from './api/api'
import Header from './components/header'

export default function Home() {
  let [bossesInfo, setBossesInfo] = useState([])

  useEffect(() => {
    getData().then((data) => setBossesInfo(data))
  }, [])

  return (
    
    <main className={styles.main}>
      <Header />
      <Bosses BossesData={bossesInfo} />
    </main>
  )
}
