export type Summoner = {
  gameName: string;
  puuid: string;
  tagLine: string
}

export type Champion = {
  key: string
  name: string
  title: string
  blurb: string
  image: string
}

export type APIChampion = {
  key: string
  name: string
  title: string
  blurb: string
  image: {
    full: string
  }
}
