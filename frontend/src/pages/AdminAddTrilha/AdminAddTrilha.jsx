import React, { useCallback, useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { useForm } from "react-hook-form"

import api from '../../service/api';
import LoggedAdminNavBar from '../../components/LoggedAdminNavBar/LoggedAdminNavBar';


const AdminAddTrilha = () => {
    const { register, handleSubmit, formState:{ errors }, setValue } = useForm({});
    const navigate = useNavigate();
    const params = useParams();
    const [user, setUser] = useState();

	useEffect(() => {
		const localUser = localStorage.getItem('@FCAMARA_USER');
		if(localUser){
			setUser(JSON.parse(localUser));
		}
	}, []);
    useEffect(() => {
        if(params && params.id) {
            api.get(`/api/trilhas/${params.id}`)
                .then(({data}) => {
                    setValue('titulo', data.titulo);
                })
                .catch(err => console.log(err));
        }
    }, [params]);

    const onSubmit = useCallback(async (data)=>{
        console.log(data);
        if(params && params.id) {
            await api.put(`/api/trilhas/${params.id}`, data);
        } else {
            await api.post('/api/trilhas', data);
        }
        navigate('/admin/edit-trilha', { replace: true });
    },[]);

    return (
        <>
            <LoggedAdminNavBar />
            <div className="admin-body">
                <p>{user ? user.name : 'Admin'}, você está autendicado como <span>administrador.</span></p>
                <h1>Painel de Controle {'>'} <span>Adicionar Trilha</span></h1>
                <div className="container-form-admin">
                    <p>Adicionar trilha</p>
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

export default AdminAddTrilha;