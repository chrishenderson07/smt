import React from 'react'

interface GameTeaserHeroTitleProps {
    teamA: string;
    teamB: string;
  }
  

export default function GameTeaserHeroTitle({teamA, teamB}:GameTeaserHeroTitleProps) {
  return (
    <div className='uppercase text-4xl font-extrabold laptop:text-6xl'>
        <h1 >{teamA}</h1>
        <div className='flex space-x-2'>
            <span>Vs</span>
            <h1 >{teamB}</h1>
        </div>
    </div>
  )
}
