import React from 'react'
import './CourseClass.css'

import VideoClass from '../../components/VideoClass/VideoClass'

import LeftArrow from '../../assets/icons/sml-arrow-left.svg'
import RightArrow from '../../assets/icons/sml-arrow-right.svg'

export default function CourseClass() {
  return (
    <main className='class-content'>
			<section className='title-content-box'>
				<h1>Full Stack Developer</h1>
				<h3>Módulo 2</h3>
				
				<div className='title-nav-arrows-box'>
					<h5>Lifelong Learning</h5>
					<div className='nav-arrows'>
						<button>
							<img src={LeftArrow} alt="Seta para a esquerda" />
						</button>
						<button>
							<img src={RightArrow} alt="Seta para a direita" />
						</button>
					</div>
				</div>

				<VideoClass />
			</section>
			<section className='module-summary'>
				<h2>Sobre o que você vai aprender</h2>
				<p className='module-lesson-subtitle'>Módulo 2 <span className='dot'></span>Conceitos Básicos</p>
				<p className='summary-txt'>Neste módulo você vai aprender sobre os conceitos básicos no mundo tech, são diversas linguagens de programação e softwares para que você consiga dar os primeiros passos e desenvolver a sua primeira aplicação, está pronto para seguir nessa jornada? </p>
			</section>
    </main>
  )
}
