import React from 'react'
import './ClassTitleNNavArrows.css'
import LeftArrow from '../../assets/icons/sml-arrow-left.svg'
import RightArrow from '../../assets/icons/sml-arrow-right.svg'

export default function ClassTitleNNavArrows(props) {
  return (
    <div className={props.className ? props.className : 'title-nav-arrows-box'} >
        <h5>Qual a melhor linguagem de programação? Aprenda com Willian da Silva</h5>
        <div className='nav-arrows'>
            <button>
                <img src={LeftArrow} alt="Seta para a esquerda" />
            </button>
            <button>
                <img src={RightArrow} alt="Seta para a direita" />
            </button>
        </div>
    </div>
  )
}
