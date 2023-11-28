import './SummonerResult.css';

const SummonerResult = ({ result }: { result: string }) => {
  return (
    <div
      className='search-result'
      onClick={() => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};

export default SummonerResult;