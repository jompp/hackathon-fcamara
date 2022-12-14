import React from 'react'
import { Link } from 'react-router-dom'
import './CourseCard.css'

import ProgressBar from '../ProgressBar/ProgressBar'

export default function CourseCard(props) {
    return (
        <div className='course-card'>
            <div className='img-info-box'>
                <h4 className='course-title-mobile'>{props.courseTitle}</h4>
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
                <Link className='access-btn' to={'/aula/1'}>{props.btnTxt}</Link>
            </div>
        </div>
    )
}
