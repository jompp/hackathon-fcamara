import React from 'react'
import './VideoClass.css'

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
    >
      Seu navegador não tem suporte para esse tipo de conteúdo. Acesse a videoaula através do link:
      <a href='https://www.youtube.com/embed/zTMvQD5EtJw'>Videoaula</a>
    </iframe>
    </>
  )
}
