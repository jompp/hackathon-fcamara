import { useState } from 'react'
import './UserLogin.css'

import * as yup from "yup";
import api from '../../service/api'

import Form from '../../components/LoginAndRegisterForms/RegisterAndLoginForm'

export default function UserLogin() {
  const [areCredencialsWrong, setAreCredencialsWrong] = useState(false)

  const sendForm =  userData => {  
    /* const response = await api.post('/api/user', userData)
    console.log(response) */
    console.log(userData) 
  }
	
	return (
    <div className='login-form-page'>
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
    </div>
  )
}
