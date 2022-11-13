import React from 'react'
import './ModuleNavigation.css'

import greyOk from '../../assets/icons/grey-ok.svg'
import whiteOk from '../../assets/icons/white-ok.svg'

export default function ModuleNavigation() {
  return (
    <nav className='class-nav'>
      <ol>
        <li className='module-info-row'>
          <span className='nav-index'>1</span>
          <div className='module-name-duration-box'>
              <a className='module-name' href="#">Introdução</a>
              <p className='content-type-n-duration'>Conteúdo Misto <span className='dot'></span>1h20</p>
          </div>
        </li>
        <li className='open module'>
          <div className='module-info-row'>
            <span className='nav-index'>2</span>
            <div className='module-name-duration-box'>
                <a className='module-name' href="#">Introdução</a>
                <p className='content-type-n-duration'>Conteúdo Misto <span className='dot'></span>1h20</p>
            </div>
          </div>

          <div className='module-info-row'>
            <div className='nav-index lesson'>
              <img src={greyOk} alt="Ícone de ok" />
            </div>
            <div className='module-name-duration-box '>
                <a className='module-name' href="#">Introdução</a>
                <p className='content-type-n-duration'>Conteúdo Misto <span className='dot'></span>1h20</p>
            </div>
          </div>

          <div className='module-info-row'>
            <div className='nav-index lesson'>
              <img src={greyOk} alt="Ícone de ok" />
            </div>
            <div className='module-name-duration-box '>
                <a className='module-name' href="#">Introdução</a>
                <p className='content-type-n-duration'>Conteúdo Misto <span className='dot'></span>1h20</p>
            </div>
          </div>

          <div className='module-info-row'>
            <div className='nav-index not-seen lesson'>
              <img src={whiteOk} alt="Ícone de ok" />
            </div>
            <div className='module-name-duration-box '>
                <a className='module-name' href="#">Introdução</a>
                <p className='content-type-n-duration'>Conteúdo Misto <span className='dot'></span>1h20</p>
            </div>
          </div>
        </li>
      </ol>
    </nav>
  )
}
