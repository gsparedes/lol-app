import './SummonerResultList.css'
import SummonerResult from '@/app/components/SummonerResult'
import { Summoner } from '@/app/types'

const SummonerResultsList = ({ results }: { results: Summoner[]}) => {
  return (
    <div className='results-list'>
      {results.map((result, id) => {
        return <SummonerResult result={result} key={id} />
      })}
    </div>
  )
}

export default SummonerResultsList