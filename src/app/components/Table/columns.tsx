import { User } from '@nextui-org/react'

export type Champion = {
  key: string
  name: string
  title: string
  blurb: string
  image: string
}

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
      return cellValue;
  }
}