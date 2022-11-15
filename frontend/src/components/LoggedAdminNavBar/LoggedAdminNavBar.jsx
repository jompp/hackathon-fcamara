import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './LoggedAdminNavBar.css';
import HeaderLogo from '../../assets/images/header-logo.svg'
import UserIcon from '../../assets/icons/user.svg'

const LoggedAdminNavBar = () => {
  const [user, setUser] = useState();
    
  useEffect(() => {
      const localUser = localStorage.getItem('@FCAMARA_USER');
      if(localUser){
          setUser(JSON.parse(localUser));
      }
  }, []);
  return (
    <div id="header-main">
        <Link to="/admin">
            <img src={HeaderLogo} alt="Logo Orange Juice" />
        </Link>
        <div id="header-right">
            <p>{user ? user.name : 'Admin'}</p>
            <img src={user ? user.avatar : UserIcon} alt="Icone de usuário" />
        </div>
    </div>
  );
}

export default LoggedAdminNavBar;