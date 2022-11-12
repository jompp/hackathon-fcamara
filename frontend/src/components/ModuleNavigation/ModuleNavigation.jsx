import React from 'react'
import './ModuleNavigation.css'

export default function ModuleNavigation() {
  return (
    <nav className='class-nav'>
        <ol>
            <li className='not-open module'>
                <span className='nav-index'>1</span>
                <div className='module-name-duration-box'>
                    <a className='module-name' href="#">Introdução</a>
                    <p className='content-type-n-duration'>Conteúdo Misto <span className='dot'></span>1h20</p>
                </div>
            </li>
            <li className='open module'>
              
            </li>
        </ol>
    </nav>
  )
}
