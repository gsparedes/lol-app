import './SummonerResult.css'
import Link from 'next/link'
import { Account } from '@/app/types'


export default function ({ result }: { result: Account }) {
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
