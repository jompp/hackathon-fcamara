import React from 'react'
import './CourseCard.css'

import ProgressBar from '../ProgressBar/ProgressBar'

export default function CourseCard(props) {
  return (
    <div className='course-card'>
        <div className='img-info-box'>
            <img src={props.courseImg} alt="Imagem representativa do curso" />
            <div className='title-info-box'>
                <h4>{props.courseTitle}</h4>
                {props.courseInfo}
            </div>
        </div>
        <div className='tracking-access-box'>
            <div className='tracking-info'>
                <ProgressBar progress={parseInt(props.progressPercentage)}/>
                <p>{props.progressPercentage}% concluído</p>
                <p>{props.lastAccess}</p>
            </div>
            <button>{props.btnTxt}</button>
        </div>
    </div>
  )
}
