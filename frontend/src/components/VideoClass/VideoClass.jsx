import React from 'react'
import './VideoClass.css'

import ModuleNavigation from '../ModuleNavigation/ModuleNavigation'

export default function VideoClass() {
  return (
    <div className='video-nav-box'>
        <iframe 
            className='yt-video' 
            src="https://www.youtube.com/embed/WsEv01p3GXU" 
            title="Como inserir vídeo do YouTube no seu site HTML (Embed)" 
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />
        
        <ModuleNavigation />
    </div>
  )
}
