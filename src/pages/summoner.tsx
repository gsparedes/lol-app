'use client';
import Table from '@/app/components/Table'
import { useState, useEffect } from 'react';

type APIChampion = {
  key: string
  name: string
  title: string
  blurb: string
  image: {
    full: string
  }
}

export default function Champions() {
  const [champions, setChampions] = useState([])
  const summonerPuuid = 'G4GgeOR0BQMuyPcCjPwTvIDTGPqQh33j2rUE8gJaGea7RXWjHvie0tE5HaBHOJ_JFOTwoM0y-uX5nw';
  useEffect(() => {
    getChampions(summonerPuuid) 
  }, []);

  const getChampions = async (summonerPuuid: string) => {
    const response = await fetch(
      `http://localhost:3010/development/get-summoner-champions?pUUID=${summonerPuuid}&region=na1`
    );
    if (!response.ok) {
      throw new Error('Failure to search for summoner');
    }
  
    const json = await response.json();
  
    const champions = json.map((champion: APIChampion) => {
      return {
        key: champion.key,
        name: champion.name,
        title: champion.title,
        blurb: champion.blurb,
        image: `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${champion?.image?.full}`,
      };
    })
    setChampions(champions);
  }

  return (
    <section className='py-24'>
      <div className='container'>
        <Table champions={champions} />
      </div>
    </section>
  )
}