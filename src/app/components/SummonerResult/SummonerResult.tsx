import './SummonerResult.css';
import Link from 'next/link'


const SummonerResult = ({ result }: { result: string }) => {
  return (
    <Link
      className='search-result'
      href={'/summoner'}
    >
      {result}
    </Link>
  );
};

export default SummonerResult;