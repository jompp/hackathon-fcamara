import React from 'react'
import './VideoClass.css'

import ModuleNavigation from '../ModuleNavigation/ModuleNavigation'

export default function VideoClass() {
  return (
    <>
    <iframe 
      className='yt-video' 
      src="https://www.youtube.com/embed/zTMvQD5EtJw" 
      title="📢 Orange Juice Cast #04 - Qual a melhor linguagem de programação? | Com Willian da Silva"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    </>
  )
}
