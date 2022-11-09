import React from 'react'
import './UserRegister.css'

import * as yup from "yup";

import Form from '../../components/LoginAndRegisterForms/RegisterAndLoginForm'

export default function UserRegister() {
  return (
    <div className='register-form-page'>
      <Form 
        text={<p className='form-text'>Ao se registrar, você aceita nossos <a href='#'>termos de uso</a> e a nossa <a href="#">política de privacidade</a>.</p>}
        textButton='Cadastrar'
        yupSchema={yup.object({
          name: yup.string().required('Preencha esse campo'),
          email: yup.string().email('Email inválido').required('Preencha esse campo'),
          password: yup.string().min(6, 'A senha deve conter no mínimo 6 dígitos').required('Preencha esse campo')
        })}
      />
    </div>
  )
}
