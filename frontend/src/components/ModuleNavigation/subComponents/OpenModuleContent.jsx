import React from 'react'
import { Link } from 'react-router-dom'

import { LessonCheckIcon } from './LessonCheckIcon'

export default function OpenModuleContent(props) {
  return (
    props.module.content.map(lesson => {
      const classId = props.module.content.indexOf(lesson)

      return(
        <div className='module-info-row'>
          <LessonCheckIcon lesson={lesson} />
          <div className='module-name-duration-box '>
            <Link to={`/aula/${classId+1}`} className='module-name'>{lesson.title}</Link>
            <p className='content-type-n-duration'>{lesson.origin} <span className='dot'></span>{lesson.duration}</p>
          </div>
        </div>
      )
    })
  )
}
