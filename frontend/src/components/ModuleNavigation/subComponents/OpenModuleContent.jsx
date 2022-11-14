import React from 'react'

import { LessonCheckIcon } from './LessonCheckIcon'

export default function OpenModuleContent(props) {
  return (
    props.module.content.map(lesson => {
        return(
            <div className='module-info-row'>
                <LessonCheckIcon lesson={lesson} />
                <div className='module-name-duration-box '>
                    <a className='module-name' href="#">{lesson.title}</a>
                    <p className='content-type-n-duration'>{lesson.origin} <span className='dot'></span>{lesson.duration}</p>
                </div>
            </div>
        )
    })
  )
}
