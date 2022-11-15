import { useState } from 'react'
import './UserLogin.css'

import * as yup from "yup";
import api from '../../service/api'

import Form from '../../components/LoginAndRegisterForms/RegisterAndLoginForm'

export default function UserLogin() {
  const [areCredencialsWrong, setAreCredencialsWrong] = useState(false)

  const sendForm = async userData => { 
    delete userData.name 
    console.log(userData) 
    const response = await api.post('/api/auth', userData)
    console.log(response)
  }
	
	return (
    <main className='login-form-page'>
			<Form
				formLegend='Faça seu login'
				text={<p className='form-text'>Não tem conta? <a href='/cadastro'>Crie sua conta.</a></p>}
        textButton='Entrar'
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
