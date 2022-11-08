import React from 'react'
import Form from '../../components/LoginAndRegisterForms/RegisterAndLoginForm'

export default function UserRegister() {
  return (
    <>
      <Form 
        text={<p className='form-text'>Ao se registrar, você aceita nossos <a href='#'>termos de uso</a> e a nossa <a href="#">política de privacidade</a>.</p>}
        textButton='Cadastrar'
      />
    </>
  )
}
