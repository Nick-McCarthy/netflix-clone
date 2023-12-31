'use client'

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { Movie } from '@/types'
import { baseUrl } from '@/constants/movie'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/24/solid'


interface Props {
  netflixOriginals: Movie[]
}

const Banner = ({netflixOriginals}: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
      setMovie( netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
      }, [netflixOriginals]
    )
  
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[68vh] lg:justify-end lg:pb-12">
        <div className="absolute top-0 left-0 -z-10 h-[75vh] w-screen">
          <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} alt='Banner Image' fill style={{objectFit:"cover"}} priority />
        </div>
        <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          {movie?.overview}
        </p>
    </div>
  )
}

export default Banner
/*
<div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
<div className='absolute top-0 left-0 -z-10 h-[95vh] w-screen'>
  <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} alt='Banner Image' fill style={{objectFit:"cover"}} priority />
</div>
<h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">{movie?.title || movie?.name || movie?.original_name}</h1>
<p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>
<div className="flex space-x-3">

</div>
</div>*/