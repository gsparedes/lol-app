'use client'
import React, { ChangeEvent, useState } from 'react'

type SearchProps = {
  setResults: Function
  setIsLoading: Function
  region: string
}

export default function Search(props: SearchProps) {
  const { setResults, setIsLoading, region } = props
  const [value, setValue] = useState('Enter search...')

  const fetchData = async (value: string) => {
    // Sample region na1_americas
    const arr = region.split('_');
    const tagTitle = arr[0];
    const apiRegion = arr[1];

    const authHeaderValue = process.env.NEXT_PUBLIC_LAMBDA_AUTH_HEADER_VALUE || '';
    setIsLoading(true)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LOL_API_ENDPOINT}/by-riot-id?gameName=${value}&tagTitle=${tagTitle}&region=${apiRegion}`,
      {
        headers: {
          'api-lambda-auth': authHeaderValue,
        },
      }
    )

    if (!response.ok) {
      throw new Error('Failure to search for summoner')
    }

    const json = await response.json()
    setResults([json])
    setIsLoading(false)
  }

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    setValue(target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchData(value)
    }
  }

  const searchClick = () => {
    fetchData(value);
  }

  return (
    <div className='relative w-full text-gray-600'>
      <input
        type='search'
        name='search'
        placeholder={value}
        className='bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none'
        onChange={(event) => searchHandler(event)}
        onKeyDown={handleKeyDown}
      />
      <button type='submit' className='absolute right-0 top-0 mt-3 mr-4' onClick={searchClick}>
        <svg
          className='h-4 w-4 fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path
            fillRule='evenodd'
            d='M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  )
}
