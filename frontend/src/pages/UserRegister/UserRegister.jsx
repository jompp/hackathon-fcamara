import React from 'react'
import './UserRegister.css'

import Form from '../../components/LoginAndRegisterForms/RegisterAndLoginForm'

export default function UserRegister() {
  return (
    <div className='register-form-page'>
      <Form 
        text={<p className='form-text'>Ao se registrar, você aceita nossos <a href='#'>termos de uso</a> e a nossa <a href="#">política de privacidade</a>.</p>}
        textButton='Cadastrar'
      />
    </div>
  )
}
