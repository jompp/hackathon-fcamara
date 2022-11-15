import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './UserLogin.css'

import * as yup from "yup";
import api from '../../service/api'

import Form from '../../components/LoginAndRegisterForms/RegisterAndLoginForm'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle';

export default function UserLogin() {
  const [waitingResponse, setWaitingResponse] = useState(false)
  const [areCredencialsWrong, setAreCredencialsWrong] = useState(false)
  const navigate = useNavigate()

  const sendForm = async userData => {
    setWaitingResponse(true) 
    delete userData.name 
    try {
      const response = await api.post('/api/auth', userData)
      console.log(response)
      navigate('/cursos')
    } catch(e) {
      if(e.response.status === 400) {
        setAreCredencialsWrong(true)
      } else {
        alert("Ops, alguma coisa deu errado. Tente novamente mais tarde.")
      }
    }
    setWaitingResponse(false)
  }
	
	return (
    <main className='login-form-page'>
			<Form
				formLegend='Faça seu login'
				text={<p className='form-text'>Não tem conta? <a href='/cadastro'>Crie sua conta.</a></p>}
        textButton={waitingResponse ? <LoadingCircle /> : 'Entrar'}
        yupSchema={yup.object({
          email: yup.string().required('Preencha esse campo'),
          password: yup.string().required('Preencha esse campo')
        })}
        onSubmit={sendForm}
        loginError={areCredencialsWrong ? 'login-error' : null}
			/>
    </main>
  )
}
