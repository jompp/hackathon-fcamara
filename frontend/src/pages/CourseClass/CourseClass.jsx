import React from 'react'
import './CourseClass.css'

import VideoClass from '../../components/VideoClass/VideoClass'
import ClassTitleNNavArrows from '../../components/ClassTitleNNavArrows/ClassTitleNNavArrows'
import ModuleNavigation from '../../components/ModuleNavigation/ModuleNavigation'
import LoggedUserNavbar from '../../components/LoggedUserNavbar/LoggedUserNavbar'

export default function CourseClass() {
  return (
	<>
	<LoggedUserNavbar />
    <main className='class-content'>
			<section className='title-content-box'>
				<h1>Full Stack Developer</h1>
				<h3>Módulo 2</h3>
				
				<div className='video-title-box'>
					<ClassTitleNNavArrows />
					
					<div className='video-nav-box'>
						<VideoClass />
						<div className='nav-title-box-mobile'>
							<ClassTitleNNavArrows className='title-nav-arrows-box mobile'/>
							<ModuleNavigation />
						</div>
					</div>
					
				</div>
			</section>

			<section className='module-summary'>
				<h2>Sobre o que você vai aprender</h2>
				<p className='module-lesson-subtitle'>Módulo 2 <span className='dot'></span>Conceitos Básicos</p>
				<p className='summary-txt'>Neste módulo você vai aprender sobre os conceitos básicos no mundo tech, são diversas linguagens de programação e softwares para que você consiga dar os primeiros passos e desenvolver a sua primeira aplicação, está pronto para seguir nessa jornada? </p>
			</section>
    </main>
	
	</>
  )
}
