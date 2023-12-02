'use client'
import { useState } from 'react'
import Search from './components/Search'
import SummonerResultList from './components/SummonerResultList'
import Spinner from './components/Spinner'
import Select from './components/Select'

export default function Home() {
  const [region, setRegion] = useState('na1_americas')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-md items-center justify-between font-mono text-sm lg:flex-inline'>
        <h1 className={'text-5xl my-10'}>Summoner Search</h1>
        <div className='w-full region-dropdown'>
          <Select setRegion={setRegion}/>
        </div>
        <Search setResults={setResults} setIsLoading={setIsLoading} region={region}/>
        { isLoading ? <Spinner/> : results && results.length > 0 && <SummonerResultList results={results}/> }
      </div>
    </main>
  )
}