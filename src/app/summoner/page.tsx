'use client'
import Table from '@/app/components/Table'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Spinner from '@/app/components/Spinner'
import { APIChampion } from '@/app/types'

export default function Champions() {
  const searchParams = useSearchParams()
  const summonerPuuid = searchParams.get('puuid') || ''
  const region = searchParams.get('region')

  const [champions, setChampions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getChampions(summonerPuuid) 
  }, [])

  const getChampions = async (summonerPuuid: string) => {
    const response = await fetch(
      `http://localhost:3010/development/get-summoner-champions?pUUID=${summonerPuuid}&region=${region}`
    )
    if (!response.ok) {
      throw new Error('Failure to search for summoner')
    }
  
    const json = await response.json()
  
    const champions = json.map((champion: APIChampion) => {
      return {
        key: champion.key,
        name: champion.name,
        title: champion.title,
        blurb: champion.blurb,
        image: `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${champion?.image?.full}`,
      }
    })
    setChampions(champions)
    setIsLoading(false)
  }

  return (
    <section className='py-24'>
      <div className='container'>
        { isLoading ? <Spinner/> : <Table champions={champions} /> }
      </div>
    </section>
  )
}