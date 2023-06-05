"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import getData from './api/api'
import Header from './components/Header'
import Bosses from './components/Bosses'


export const getBoss = async () => {
  const res = await fetch(`https://eldenring.fanapis.com/api/bosses/17f695abef9l0i1ujzrup5y0z7rw6`)
  const data = await res.json()
  console.log(data)
}

getBoss()

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
