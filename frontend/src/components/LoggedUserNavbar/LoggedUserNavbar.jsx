import React from 'react'
import './LoggedUserNavbar.css'

import HeaderLogo from '../../assets/images/header-logo.svg'
import SearchIcon from '../../assets/icons/search.svg'
import BookIcon from '../../assets/icons/book.svg'
import QuestionIcon from '../../assets/icons/message-question.svg'
import ProfilePhoto from '../../assets/images/profile-photo-example.jpg'

export default function LoggedUserNavbar() {
  return (
    <header>
      <img className='original-size-img' src={HeaderLogo} alt="Logo Orange Juice" />

      <div className='nav-items'>
        <div className='search-box'>
          <input type="text" />
          <img src={SearchIcon} alt="Lupa" />
        </div>

        <nav className='nav-items'>
          <a href="#">
            <img src={BookIcon} alt="Link ícone livro" />
          </a>
          <a href="#">  
            <img src={QuestionIcon} alt="Link ícone perguntas" />
          </a>
        </nav>
        
        <img className='original-size-img' src={ProfilePhoto} alt="Perfil ícone menu" />
      </div>
    </header>
  )
}
