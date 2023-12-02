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
  }
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

    default:
      return cellValue
  }
}