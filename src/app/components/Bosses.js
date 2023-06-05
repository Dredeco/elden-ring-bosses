import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const BossesSection = styled.section`
    height: auto;
`

const Container = styled.div`
    margin: 1rem 2%;
`

const BossesList = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    gap: .5rem;
    grid-template-columns: 1fr;

    @media screen and (min-width: 426px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 769px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const BossCard = styled.li`
    background-color: #000;
    padding: .5rem .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border: 1px solid gold;
    border-radius: 10px;

    h3 {
        margin: .5rem 0;
    }
    span {
        margin: .5rem 0;
    }
    a {
        text-decoration: none;
        color: #fff;
        background-color: goldenrod;
        padding: .5rem 1rem;
        border-radius: 10px;
        border: 1px solid #555;
        text-transform: uppercase;
        font-weight: 700;
    }
`

export default function Bosses(BossesData) {
  let Bosses = BossesData.BossesData;

    return (
    <BossesSection>
        <Container>
            <BossesList>

                {Bosses.map((boss) => {
                    if (boss.image != null) {
                     return (
                     <BossCard key={boss.id}>
                        <Image 
                            src={`${boss.image}`}
                            width={300}
                            height={120}
                            objectFit='cover'
                            objectPosition='center'
                        />
                        <h3>{boss.name}</h3>
                        <h4>Location</h4>
                        <span>{boss.location}</span>
                        <Link href={`./boss/${boss.id}`}>Mais detalhes</Link>
                    </BossCard>
                    )}
                })}

            </BossesList>
        </Container>
    </BossesSection>
  )
}
