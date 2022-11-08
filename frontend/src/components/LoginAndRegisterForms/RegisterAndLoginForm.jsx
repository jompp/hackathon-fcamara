import React from 'react'
import './RegisterAndLoginForm.css'

import userIcon from '../../assets/icons/user.svg'
import emailIcon from '../../assets/icons/email.svg'
import lockIcon from '../../assets/icons/lock.svg'
import eyeSlashIcon from '../../assets/icons/eye-slash.svg'
import eyeIcon from '../../assets/icons/eye.svg'
import arrowLeftIcon from '../../assets/icons/arrow-left.svg'

export default function Form(props) {
  return (
    <form className='login-register-form'>
			<legend>Crie sua conta</legend>
			
			<fieldset>
				<div className="ipt-err-box">
					<div className="icon-ipt-box">
						<img className='icon' src={userIcon} alt="Ícone de usuário" />
						<input type="text" name="name" placeholder='Seu nome'/>
					</div>
					<span>alguma coisa</span>
				</div>

				<div className="ipt-err-box">
					<div className="icon-ipt-box">
						<img className='icon' src={emailIcon} alt="Ícone de email" />
						<input type="text" name="email" placeholder='Seu email'/>
					</div>
					<span>alguma coisa</span>
				</div>

				<div className="ipt-err-box">
					<div className="icon-ipt-box">
						<img className='icon' src={lockIcon} alt="Ícone de cadeado" />
						<input type="password" name="password" placeholder='Sua senha'/>
						<img className='icon eye-slash' src={eyeSlashIcon} alt="Ícone de cadeado" />
					</div>
					<span>alguma coisa</span>
				</div>
			</fieldset>

			{props.text}
			<button type='submit'>{props.textButton}</button>
			<div className='back-to-login-box'>
				<img src={arrowLeftIcon} alt="Seta para a esquerda" />
				<a href="#">Voltar para o login</a>
			</div>
    </form>
  )
}

