import React from 'react'
import { useParams } from 'react-router-dom'
import './CourseClass.css'

import VideoClass from '../../components/VideoClass/VideoClass'
import ClassTitleNNavArrows from '../../components/ClassTitleNNavArrows/ClassTitleNNavArrows'
import ModuleNavigation from '../../components/ModuleNavigation/ModuleNavigation'
import LoggedUserNavbar from '../../components/LoggedUserNavbar/LoggedUserNavbar'
import dataMock from '../../mock/content.json'

export default function CourseClass() {
	const { id } = useParams()
	const content = dataMock.fs_course.modules[1].content[id-1]

	return (
		<>
		<LoggedUserNavbar />
		<main className='class-content'>
			<section className='title-content-box'>
				<h1>Full Stack Developer</h1>
				<h3>Módulo 2</h3>
				
				<div className='video-title-box'>
					<ClassTitleNNavArrows title={content.title}/>
					
					<div className='video-nav-box'>
						<VideoClass 
						url={content.link}
						title={content.title}
						/>
						<div className='nav-title-box-mobile'>
							<ClassTitleNNavArrows 
							className='title-nav-arrows-box mobile'
							title={content.title}
							/>
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
