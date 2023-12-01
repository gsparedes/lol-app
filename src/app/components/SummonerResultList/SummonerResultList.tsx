import './SummonerResultList.css'
import SummonerResult from '@/app/components/SummonerResult'
import { Account } from '@/app/types'

const SummonerResultsList = ({ results }: { results: Account[]}) => {
  return (
    <div className='results-list'>
      {results.map((result, id) => {
        return <SummonerResult result={result} key={id} />
      })}
    </div>
  )
}

export default SummonerResultsList