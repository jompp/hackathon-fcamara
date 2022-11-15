import React from 'react'
import { Link } from 'react-router-dom'
import './LoggedUserNavbar.css'

import DropdownMenu from './DropdownMenu/DropdownMenu'

import HeaderLogo from '../../assets/images/header-logo.svg'
import SearchIcon from '../../assets/icons/search.svg'
import BookIcon from '../../assets/icons/book.svg'
import QuestionIcon from '../../assets/icons/message-question.svg'
import ProfilePhoto from '../../assets/images/profile-photo-example.jpg'

export default function LoggedUserNavbar() {
  return (
    <header>
      <Link to='/cursos'>
        <img className='original-size-img logo' src={HeaderLogo} alt="Logo Orange Juice" />
      </Link>

      <div className='nav-items'>
        <div className='search-box'>
          <input type="text" />
          <img src={SearchIcon} alt="Lupa" />
        </div>
        <img className='mobile-search-icon' src={SearchIcon} alt="Lupa" />

        <nav className='nav-items'>
          <a href="#">
            <img src={BookIcon} alt="Link ícone livro" />
          </a>
          <a href="#">  
            <img src={QuestionIcon} alt="Link ícone perguntas" />
          </a>
        </nav>
        
        <img className='original-size-img profile-pic' src={ProfilePhoto} alt="Perfil ícone menu" />
        <DropdownMenu />
      </div>
    </header>
  )
}
