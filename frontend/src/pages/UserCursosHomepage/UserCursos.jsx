import React from 'react'
import './UserCursos.css'

import LoggedUserNavbar from '../../components/LoggedUserNavbar/LoggedUserNavbar'
import CourseCard from '../../components/CourseCard/CourseCard'

import CourseImg from '../../assets/images/fs-course.jpg'

export default function UserCursos() {
  return (
    <>
    <LoggedUserNavbar />
    <main>
        <section className='continue-the-course'>
            <h2>Continue de onde parou</h2>
            <CourseCard 
                courseImg={CourseImg}
                courseTitle='Full Stack Developer'
                courseInfo={
                    <p>Linguagem de programação;<br/>Lógica de programação e algoritmos;<br/>HTML, CSS e Bootstrap;<br/>HTTP e HTTPS;<br/>E muito mais sobre o universo tech!</p>
                }
                completionPercentage='30% concluído'
                lastAccess='Útimo acesso em 07/11/2022'
                btnTxt='Acessar'
            />
        </section>
    </main>
    </>
  )
}
