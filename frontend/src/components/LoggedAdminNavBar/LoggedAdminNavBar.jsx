import React from 'react';
import { Link } from 'react-router-dom';

import './LoggedAdminNavBar.css';
import HeaderLogo from '../../assets/images/header-logo.svg'
import UserIcon from '../../assets/icons/user.svg'

const LoggedAdminNavBar = () => {
  return (
    <div id="header-main">
        <Link>
            <img src={HeaderLogo} alt="Logo Orange Juice" />
        </Link>
        <div id="header-right">
            <p>Nome admin</p>
            <img src={UserIcon} alt="Icone de usuário" />
        </div>
    </div>
  );
}

export default LoggedAdminNavBar;