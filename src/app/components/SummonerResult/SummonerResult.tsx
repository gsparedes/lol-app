import './SummonerResult.css'
import Link from 'next/link'
import { Summoner } from '@/app/types'


export default function ({ result }: { result: Summoner }) {
  return (
    <Link
      className='search-result'
      href={{
        pathname: '/summoner',
        query: {
            puuid: result.puuid,
            region: result.tagLine
        }
    }}
    >
      {result.gameName}
    </Link>
  )
}
