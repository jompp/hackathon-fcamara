import React, { useCallback } from 'react';
import { useForm } from "react-hook-form"

import './AdminAddCurso.css';
import LoggedAdminNavBar from '../../components/LoggedAdminNavBar/LoggedAdminNavBar';

const AdminAddCurso = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({});

    const onSubmit = useCallback((data)=>{
        console.log(data);
    },[]);
    return (
        <>
        <LoggedAdminNavBar />
            <div className='admin-body'>
                <p>Ana, você está autendicado como <span>administrador.</span></p>
                <h1>Painel de Controle > <span>Adicionar Curso</span></h1>
                <div className="container-form-admin">
                    <p>Adicionar curso</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="titulo">Título</label>
                        <input {...register('titulo', {required: true})} type="text" id="titulo" name="titulo" placeholder='Full Stack'/>
                        <button type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AdminAddCurso;