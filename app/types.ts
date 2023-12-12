export type Account = {
  gameName: string;
  puuid: string;
  tagLine: string
}

export type Summoner = {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileImage: string;
  summonerLevel: number;
}

export type Champion = {
  key: string
  name: string
  title: string
  blurb: string
  image: string
  attack: number
  defense: number
  magic: number
  difficulty: number
}

export type APIChampion = {
  key: string
  name: string
  title: string
  blurb: string
  avatar: string
  info: {
    attack: number
    defense: number
    magic: number
    difficulty: number
  }
  playerMetadata: {
    championLevel: number
    championPoints: number
  }
}

export type TableColumnHeader = {
  key: string
  label: string
  allowSorting: boolean
}
