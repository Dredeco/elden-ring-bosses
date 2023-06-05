"use client"

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/legacy/image'

export const getStaticPaths = async () => {
  const limit = 50
  const api = `https://eldenring.fanapis.com/api/bosses`

  const res = await fetch(`${api}?limit=${limit}`)
  const data = await res.json()

  const paths = data.data.map((boss) => {
    return {
      params: { bossId: boss.id },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getBossInfo = async (params) => {
  const id = (params.bossId)
  const res = await fetch(`https://eldenring.fanapis.com/api/bosses/${id}`)
  const data = await res.json().then((data) => (data.data))

  return data
};

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
  let [boss, setBoss] = useState({})

  useEffect(() => {
    getBossInfo(params).then((data) => setBoss(data))
  }, [])

  let drop = new Array(2)
  drop = boss.drops

  console.log(drop)

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
        <p><strong>Runes:</strong> {boss.drops}</p>
        <p><strong>Item:</strong> {boss.drops}</p>
      </GeneralInfo>
    </Container>
  )
}
