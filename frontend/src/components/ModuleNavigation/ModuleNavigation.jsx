import React from 'react'
import './ModuleNavigation.css'

import dataMock from '../../mock/content.json'
import OpenModuleContent from './subComponents/OpenModuleContent'

export default function ModuleNavigation() {
  const module = dataMock.fs_course.modules[1]

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
                <a className='module-name' href="#">{module.title}</a>
                <p className='content-type-n-duration'>Conteúdo Misto <span className='dot'></span>{module.ch}</p>
            </div>
          </div>
        
          <OpenModuleContent module={module}/>
        </li>
      </ol>
    </nav>
  )
}
