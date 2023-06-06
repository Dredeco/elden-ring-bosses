"use client"
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/legacy/image'
import {getDataById} from '@/app/api/api'
import Link from 'next/link'
import Loading from './loading'

async function getBosses(id) {
  let bosses = await getDataById(id)
  return bosses
}

const Container = styled.div`
    margin: 1rem 2%;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
`
const GeneralInfo = styled.div`
`

export default function BossInfo({params}) {
  let [boss, setBoss] = useState({});
  let [isLoading, setIsLoading] = useState(true)
  let id = params.bossId;

  useEffect(() => {
    getBosses(id)
    .then((data) => setBoss(data))
    setTimeout(() => (
      setIsLoading(false)
    ), 3000)
  }, [])

  if (isLoading) {
    return <Loading />
  }
    return (
      <Container>
        <h1>{boss.name}</h1>
        <Image 
            src={`${boss.image}`}
            width={300}
            height={120}
            objectFit='cover'
            objectPosition='center'
        />
        <span>{boss.description}</span>
        <GeneralInfo>
          <p><strong>Location:</strong> {boss.location}</p>
          <p><strong>Region:</strong> {boss.region}</p>
          <p><strong>Runes:</strong> {boss.drops[0]}</p>
          <p><strong>Item:</strong> {boss.drops[1]}</p>
        </GeneralInfo>

        <Link href='#'>Voltar</Link>
      </Container>
    )
}
