import { useState } from 'react'
import './UserRegister.css'

import * as yup from "yup";
import api from '../../service/api'

import Form from '../../components/LoginAndRegisterForms/RegisterAndLoginForm'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle';
 
export default function UserRegister() {
  const [waitingResponse, setWaitingResponse] = useState(false)

  const sendForm =  userData => {
    setWaitingResponse(true)  
    /* const response = await api.post('/api/user', userData)
    console.log(response) */
    setTimeout(() => {setWaitingResponse(false)}, 5000) 
  }

  return (
    <div className='register-form-page'>
      <Form 
        formLegend='Crie sua conta'
        text={<p className='form-text'>Ao se registrar, você aceita nossos <a href='#'>termos de uso</a> e a nossa <a href="#">política de privacidade</a>.</p>}
        textButton={waitingResponse ? <LoadingCircle /> : 'Cadastrar'}
        yupSchema={yup.object({
          name: yup.string().required('Preencha esse campo'),
          email: yup.string().email('Email inválido').required('Preencha esse campo'),
          password: yup.string().min(6).required('Preencha esse campo')
        })}
        onSubmit={sendForm}
      />
    </div>
  )
}
