'use client'
import Table from '@/components/Table'
import { useState, useEffect } from 'react'
import Spinner from '@/components/Spinner'
import { APIChampion } from '@/types'
import { championColumns } from '@/components/Table/columns'

export default function Summoner() {
  const [champions, setChampions] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const authHeaderValue = process.env.NEXT_PUBLIC_LAMBDA_AUTH_HEADER_VALUE || '';
    const getChampions = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_LOL_API_ENDPOINT}/get-champions`,
          {
            headers: {
              'api-lambda-auth': authHeaderValue,
            },
          }
        )
        if (!response.ok) {
          throw new Error('Failure to fetch champions')
        }
      
        const json = await response.json()
      
        const champions = json.map((champion: APIChampion) => {
          return {
            key: champion.key,
            name: champion.name,
            title: champion.title,
            blurb: champion.blurb,
            image: champion.avatar,
            attack: champion.info.attack,
            defense: champion.info.defense,
            magic: champion.info.magic,
            difficulty: champion.info.difficulty,
          }
        })
        setChampions(champions) 
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false) 
      }
    }

    getChampions()
  }, [])

  return (
    <section className='py-24'>
      { isLoading ? <Spinner/> :
        <div className='container'>
          <Table columns={championColumns} champions={champions} defaultSort={'name'} sortDirection={'ascending'}/>
        </div>
      }
    </section>
  )
}