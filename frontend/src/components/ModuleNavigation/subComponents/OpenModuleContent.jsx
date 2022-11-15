import React from 'react'
import { useParams } from 'react-router-dom'

import { LessonCheckIcon } from './LessonCheckIcon'
import dataMock from '../../../mock/content.json'

export default function OpenModuleContent(props) {
  return (
    props.module.content.map(lesson => {
      const classId = props.module.content.indexOf(lesson)
      const lessonUrl = `/aula/${classId+1}`
      return(
          <div className='module-info-row'>
              <LessonCheckIcon lesson={lesson} />
              <div className='module-name-duration-box '>
                  <a className='module-name' href={lessonUrl}>{lesson.title}</a>
                  <p className='content-type-n-duration'>{lesson.origin} <span className='dot'></span>{lesson.duration}</p>
              </div>
          </div>
      )
    })
  )
}
