import {Image} from '@nextui-org/react';
import { Summoner } from '@/types'


export default function SumonerDetails({ summoner }: { summoner?: Summoner }) {
  return (
    <div className='container'>
      <Image alt={summoner?.name} width='48' height='48' src={summoner?.profileImage} style={{borderRadius: 0}}/>
      <div className='flex flex-col'>
        <span className='text-large'>{summoner?.name}</span>
      </div>
      <div className='flex flex-col'>
        <span className='text-small'>{summoner?.summonerLevel}</span>
      </div>
    </div>
  )
}