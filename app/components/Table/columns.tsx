import { User } from '@nextui-org/react'
import { Champion } from '@/types'

export const columns = [
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'blurb',
    label: 'Description'
  },
  {
    key: 'attack',
    label: 'Attack',
  },
  {
    key: 'defense',
    label: 'Defense',
  },
  {
    key: 'magic',
    label: 'Magic',
  },
  {
    key: 'difficulty',
    label: 'Difficulty',
  },
]

export const renderCell = (champion: Champion, columnKey: React.Key) => {
  const cellValue = champion[columnKey as keyof Champion]

  switch (columnKey) {
    case 'name':
      return (
        <User
          avatarProps={{ radius: 'md', src: champion.image }}
          description={champion.title}
          name={champion.name}
        >
          {champion.name}
        </User>
      )
    case 'attack':
    case 'defense':
    case 'magic':
    case 'difficulty':
      return <div className='text-center'>{cellValue}</div>

    default:
      return cellValue
  }
}