import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ClassTitleNNavArrows.css'

import LeftArrow from '../../assets/icons/sml-arrow-left.svg'
import RightArrow from '../../assets/icons/sml-arrow-right.svg'
import dataMock from '../../mock/content.json'

export default function ClassTitleNNavArrows(props) {
  const classesNumber = dataMock.fs_course.modules[1].content.length
  const { id } = useParams()
  const navigate = useNavigate()
  const idInt = parseInt(id)

  const goToNextClass = () => {
    if(idInt < classesNumber) {
      navigate(`/aula/${idInt+1}`)
    }
  }
  const goToPreviousClass = () => {
    if(idInt > 1) {
      navigate(`/aula/${idInt-1}`)
    }
  }

  return (
    <div className={props.className ? props.className : 'title-nav-arrows-box'} >
        <h5>{props.title}</h5>
        <div className='nav-arrows'>
            <button onClick={goToPreviousClass}>
                <img src={LeftArrow} alt="Seta para a esquerda" />
            </button>
            <button onClick={goToNextClass}>
                <img src={RightArrow} alt="Seta para a direita" />
            </button>
        </div>
    </div>
  )
}
