'use client'
import Table from '@/components/Table'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Spinner from '@/components/Spinner'
import { APIChampion } from '@/types'
import SummonerDetails from '@/components/SummonerDetails'
import { summonerColumns } from '@/components/Table/columns'
import Modal from '@/components/Modal'

export default function Summoner() {
  const searchParams = useSearchParams()
  const summonerPuuid = searchParams.get('puuid') || ''
  const region = searchParams.get('region')

  const [champions, setChampions] = useState([])
  const [summoner, setSummoner] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const authHeaderValue = process.env.NEXT_PUBLIC_LAMBDA_AUTH_HEADER_VALUE || '';
    const getChampions = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_LOL_API_ENDPOINT}/get-summoner-champions?pUUID=${summonerPuuid}&region=${region}`,
          {
            headers: {
              'api-lambda-auth': authHeaderValue,
            },
          }
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
            attack: champion.info.attack,
            defense: champion.info.defense,
            magic: champion.info.magic,
            difficulty: champion.info.difficulty,
            championLevel: champion.playerMetadata.championLevel,
            championPoints: champion.playerMetadata.championPoints,
          }
        })
        setChampions(champions) 
      } catch (error) {
        console.error(error)
      }
    }
  
    const getSummonerDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_LOL_API_ENDPOINT}/get-summoner-details?pUUID=${summonerPuuid}&region=${region}`,
          {
            headers: {
              'api-lambda-auth': authHeaderValue,
            },
          }
        )
        if (!response.ok) {
          throw new Error('Failure to search for summoner')
        }
      
        const summoner = await response.json()
        setSummoner(summoner) 
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    if (summonerPuuid && region) {
      getChampions().then(getSummonerDetails)
    }    
  }, [summonerPuuid, region])

  return (
    <section className='py-24'>
      { !summonerPuuid || !region ? <Modal/> :
        isLoading ? <Spinner/> :
        <div className='container'>
          <SummonerDetails summoner={summoner}/>
          <Table columns={summonerColumns} champions={champions} defaultSort={'championLevel'} sortDirection={'descending'}/>
        </div>
      }
    </section>
  )
}