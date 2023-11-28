import './SummonerResultList.css';
import SummonerResult from '@/app/components/SummonerResult';

type Summoner = {
  gameName: string;
}

const SummonerResultsList = ({ results }: { results: Summoner[]}) => {
  return (
    <div className='results-list'>
      {results.map((result, id) => {
        return <SummonerResult result={result.gameName} key={id} />;
      })}
    </div>
  );
};

export default SummonerResultsList;