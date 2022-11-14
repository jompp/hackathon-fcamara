import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import './DropdownMenu.css';

import ProfileIcon from '../../../assets/icons/profile-circle.svg'
import ThinnerProfileIcon from '../../../assets/icons/thinner-profile-circle.svg'
import ThinnerBookIcon from '../../../assets/icons/thinner-book.svg'
import ThinnerQuestionIcon from '../../../assets/icons/thinner-message-question.svg'
import AccessibilityIcon from '../../../assets/icons/accessibility.svg'
import DiscordLogo from '../../../assets/images/discord.svg'

const DropdownMenuComp = () => {
  return (
    <DropdownMenu.Root className='menu-dd'>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
            <img className='profile-menu-icon' src={ProfileIcon} alt="ícone perfil menu" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
            <img src={ThinnerProfileIcon} alt="Perfil ícone" />
            Meu perfil
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <img src={ThinnerBookIcon} alt="Trilhas ícone" />
            Trilhas
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <img src={ThinnerQuestionIcon} alt="Suporte ícone" />
            Suporte
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <img src={AccessibilityIcon} alt="Acessibilidade ícone" />
            Acessibilidade
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem discord-btn-item">
            <button className='discord-btn'>
              <img src={DiscordLogo} alt="Discord logo" />
              Comunidade
            </button>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuComp;