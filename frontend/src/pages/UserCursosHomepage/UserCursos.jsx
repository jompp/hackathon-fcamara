import React from 'react'
import './UserCursos.css'

import LoggedUserNavbar from '../../components/LoggedUserNavbar/LoggedUserNavbar'
import CourseCard from '../../components/CourseCard/CourseCard'

import FsCourseImg from '../../assets/images/fs-course.jpg'
import QaCourseImg from '../../assets/images/qa-course.jpg'
import UxCourseImg from '../../assets/images/ux-course.jpg'
import LogoFcamara from '../../assets/images/Logo-FCamara.jpg'
import LogoTt from '../../assets/images/tt-logo.svg'
import LogoInsta from '../../assets/images/insta-logo.svg'
import LogoDiscord from '../../assets/images/yellow-disc-logo.svg'
import LogoYt from '../../assets/images/yt-logo.svg'

export default function UserCursos() {
  return (
    <>
    <LoggedUserNavbar />
    <main>
        <section className='continue-the-course'>
            <h2>Continue de onde parou</h2>
            <div className='courses-grid-mobile'>
                <CourseCard 
                    courseImg={FsCourseImg}
                    courseTitle='Full Stack Developer'
                    courseInfo={
                        <p>Linguagem de programação;<br/>Lógica de programação e algoritmos;<br/>HTML, CSS e Bootstrap;<br/>HTTP e HTTPS;<br/>E muito mais sobre o universo tech!</p>
                    }
                    progressPercentage='30'
                    lastAccess='Útimo acesso em 07/11/2022'
                    btnTxt='Acessar'
                />
            </div>
        </section>
        <section className='available-courses'>
            <h2>Trilhas disponíveis</h2>
            <div className='courses-grid-mobile'>
                <h3>Para se tornar QA Tester</h3>
                <CourseCard 
                    courseImg={QaCourseImg}
                    courseTitle='Quality Assurence'
                    courseInfo={
                        <p>Bancos de dados;<br/>Automação de testes;<br/>Qualidade de software;<br/>Github;<br/>Aproveite e veja a vida sem bugs depois!</p>
                    }
                    progressPercentage='0'
                    btnTxt='Iniciar trilha'
                />

                <h3>Para se tornar Product Designer</h3>
                <CourseCard 
                    courseImg={UxCourseImg}
                    courseTitle='UI/UX Design'
                    courseInfo={
                        <p>Teoria das cores;<br/>Protótipo para testes;<br/>Avaliação comparativa;<br/>Como realizar pesquisas;<br/>E muito mais sobre designer e usuários!</p>
                    }
                    progressPercentage='0'
                    btnTxt='Iniciar trilha'
                />
            </div>
        </section>
    </main>
    <footer>
        <h2>Apoio</h2>
        <div className='supporters-box'>
            <a className='fcamara-link' href="https://digital.fcamara.com.br/orangejuice">
                <img src={LogoFcamara} alt="Fcamara Logo" />
            </a>
            <a href="https://twitter.com/orangejuice">
                <img src={LogoTt} alt="Twitter Logo" />
            </a>
            <a href="https://www.instagram.com/orangejuicetech/">
                <img src={LogoInsta} alt="Instagram Logo" />
            </a>
            <a href="https://discord.com/invite/NtESsDFGx5">
                <img src={LogoDiscord} alt="Discord Logo" />
            </a>
            <a href="https://www.youtube.com/c/OrangeJuicefc">
                <img src={LogoYt} alt="Youtube Logo" />
            </a>
        </div>
    </footer>
    </>
  )
}
