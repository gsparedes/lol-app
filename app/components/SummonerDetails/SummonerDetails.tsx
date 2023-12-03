import {Image} from '@nextui-org/react';
import { Summoner } from '@/types'


export default function SumonerDetails({ summoner }: { summoner?: Summoner }) {
  return (
    <div className='container flex summoner-details-header'>
      <div className='px-2'>
      <Image alt={summoner?.name} width='80' height='80' src={summoner?.profileImage} style={{borderRadius: 0}}/>
      </div>
      <div className='px-2 flex-col summoner-details-text'>
        <div>
          <span className='text-large font-bold	'>{summoner?.name}</span>
        </div>
        <div>
          <span className='text-small'>Level: {summoner?.summonerLevel}</span>
        </div>
      </div>
    </div>
  )
}