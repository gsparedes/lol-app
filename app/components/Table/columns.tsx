import { User } from '@nextui-org/react'
import { Champion } from '@/types'

export const columns = [
  {
    key: 'championLevel',
    label: 'Champion Level',
    allowSorting: true,
  },
  {
    key: 'name',
    label: 'Name',
    allowSorting: true,
  },
  {
    key: 'championPoints',
    label: 'Champion Points',
    allowSorting: true,
  },
  {
    key: 'blurb',
    label: 'Description',
    allowSorting: false,
  },
  {
    key: 'attack',
    label: 'Attack',
    allowSorting: true,
  },
  {
    key: 'defense',
    label: 'Defense',
    allowSorting: true,
  },
  {
    key: 'magic',
    label: 'Magic',
    allowSorting: true,
  },
  {
    key: 'difficulty',
    label: 'Difficulty',
    allowSorting: true,
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
    case 'championLevel':
    case 'championPoints':
      return <div className='text-center'>{cellValue}</div>

    default:
      return cellValue
  }
}