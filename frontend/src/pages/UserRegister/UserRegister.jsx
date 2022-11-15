import { useState } from 'react'
import { redirect, useNavigate } from "react-router-dom"
import './UserRegister.css'

import * as yup from "yup";
import api from '../../service/api'

import Form from '../../components/LoginAndRegisterForms/RegisterAndLoginForm'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle';
 
export default function UserRegister() {
  const [waitingResponse, setWaitingResponse] = useState(false)
  const navigate = useNavigate()

  const sendForm = async userData => {
    setWaitingResponse(true)  
    try {
      const response = await api.post('/api/user', userData)
      console.log(response)
      navigate('/cursos')
    } catch(e) {
      if(e.response.status === 400) {
        alert('Esse usuário já existe')
      } else {
        alert("Ops, alguma coisa deu errado. Tente novamente mais tarde.")
      }
    }
    setWaitingResponse(false) 
  }

  return (
    <main className='register-form-page'>
      <Form 
        formLegend='Crie sua conta'
        text={<p className='form-text'>Ao se registrar, você aceita nossos <a href='#'>termos de uso</a> e a nossa <a href="#">política de privacidade</a>.</p>}
        textButton={waitingResponse ? <LoadingCircle /> : 'Cadastrar'}
        yupSchema={yup.object({
          name: yup.string().required('Preencha esse campo'),
          email: yup.string().email('Email inválido').required('Preencha esse campo'),
          password: yup.string().min(6, 'A senha deve conter no mínimo 6 dígitos').required('Preencha esse campo')
        })}
        onSubmit={sendForm}
      />
    </main>
  )
}
