'use client'
import Table from '@/components/Table'
import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Spinner from '@/components/Spinner'
import { APIChampion } from '@/types'
import SummonerDetails from '@/components/SummonerDetails'

export default function Summoner() {
  const searchParams = useSearchParams()
  const summonerPuuid = searchParams.get('puuid') || ''
  const region = searchParams.get('region')

  const [champions, setChampions] = useState([])
  const [summoner, setSummoner] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const getChampions = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LOL_API_ENDPOINT}/get-summoner-champions?pUUID=${summonerPuuid}&region=${region}`
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
        image: champion.avatar,
      }
    })
    setChampions(champions)
  }

  const getSummonerDetails = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LOL_API_ENDPOINT}/get-summoner-details?pUUID=${summonerPuuid}&region=${region}`
    )
    if (!response.ok) {
      throw new Error('Failure to search for summoner')
    }
  
    const summoner = await response.json()
    setSummoner(summoner)
  }

  const loadPage = async () => {
    await Promise.all([
      getSummonerDetails(),
      getChampions(),
    ]);
    setIsLoading(false)
  }

  useEffect(() => {
    loadPage() 
  }, [])

  return (
    <section className='py-24'>
      { isLoading ? <Spinner/> :
        <div className='container'>
          <SummonerDetails summoner={summoner}/>
          <Table champions={champions} />
        </div>
      }
    </section>
  )
}