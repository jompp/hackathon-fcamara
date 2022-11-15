import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
      if(response.data.user.admin){
        delete response.data.user.password;
        localStorage.clear();
        localStorage.setItem('@FCAMARA_USER', JSON.stringify(response.data.user));
        navigate('/admin', {replace: true})
      } else {
        navigate('/cursos', {replace: true})
      }
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
				text={<p className='form-text'>Não tem conta? <Link to='/cadastro' className='link'>Crie sua conta.</Link></p>}
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
