import React from 'react'
import './UserCursos.css'

import LoggedUserNavbar from '../../components/LoggedUserNavbar/LoggedUserNavbar'
import CourseCard from '../../components/CourseCard/CourseCard'

import FsCourseImg from '../../assets/images/fs-course.jpg'
import QaCourseImg from '../../assets/images/qa-course.jpg'
import UxCourseImg from '../../assets/images/ux-course.jpg'

export default function UserCursos() {
  return (
    <>
    <LoggedUserNavbar />
    <main>
        <section className='continue-the-course'>
            <h2>Continue de onde parou</h2>
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
        </section>
        <section className='available-courses'>
            <h2>Trilhas disponíveis</h2>
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
        </section>
    </main>
    </>
  )
}
