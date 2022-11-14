import React from 'react'
import './VideoClass.css'

export default function VideoClass(props) {
  return (
    <>
    <iframe 
      className='yt-video' 
      src={props.url} 
      title={props.title}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    >
      Seu navegador não tem suporte para esse tipo de conteúdo. Acesse a videoaula através do link:
      <a href={props.url}>Videoaula</a>
    </iframe>
    </>
  )
}
