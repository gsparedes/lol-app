'use client';
import { useState } from 'react';
import Search from '@/app/components/Search';
import SummonerResultList from '@/app/components/SummonerResultList';
import Spinner from '@/app/components/Spinner';

export default function Home() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-md items-center justify-between font-mono text-sm lg:flex-inline'>
        <h1 className={'text-5xl my-10'}>Summoner Search</h1>
        <Search setResults={setResults} setIsLoading={setIsLoading} />
        { isLoading ? <Spinner/> : results && results.length > 0 && <SummonerResultList results={results}/> }
      </div>
    </main>
  )
}