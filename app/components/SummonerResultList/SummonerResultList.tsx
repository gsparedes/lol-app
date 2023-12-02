import './SummonerResultList.css'
import SummonerResult from '@/components/SummonerResult'
import { Account } from '@/types'

export default function SummonerResultsList({ results }: { results: Account[]}) {
  return (
    <div className='results-list'>
      {results.map((result, id) => {
        return <SummonerResult result={result} key={id} />
      })}
    </div>
  )
}
