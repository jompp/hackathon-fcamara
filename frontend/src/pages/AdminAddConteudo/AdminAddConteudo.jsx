import React, { useCallback } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { useForm } from "react-hook-form"
import './AdminAddConteudo.css';
import LoggedAdminNavBar from '../../components/LoggedAdminNavBar/LoggedAdminNavBar';
import api from '../../service/api';
import { useState } from 'react';
import { useEffect } from 'react';

const AdminAddConteudo = () => {
    const [trilhas, setTrilhas] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [cursoSelected, setCursoSelected] = useState();
    
    const { register, handleSubmit, formState:{ errors }, setValue } = useForm({});
    const navigate = useNavigate();
    const params = useParams();
    
    useEffect(() => {
        if(!params || !params.id) {
            api.get('/curso')
            .then(({data}) => {
                setCursos(data);
                console.log(data);
            })
            .catch(err => console.log(err));
        }
    }, [params]);

    useEffect(() => {
        if(params && params.id) {
            api.get(`/conteudo/${params.id}`)
                .then(({data}) => {
                    setValue('titulo', data.titulo);
                    setValue('tipo', data.tipo);
                    setValue('origem', data.origem);
                    setValue('duracao', data.duracao);
                    setValue('link', data.link);
                })
                .catch(err => console.log(err));
        }
    }, [params]);
    
    useEffect(() => {
        console.log(cursoSelected);
        if(cursoSelected && cursoSelected.trilhas){
            api.post('/trilhas/trilha-by-ids', cursoSelected.trilhas)
                .then(({data}) => {
                    setTrilhas(data);
                    console.log('trilhas', data);
                }).catch(err => console.log(err));
        } else {
            setTrilhas([]);
        }
    }, [cursoSelected]);

    const onSubmit = useCallback(async (data)=>{
        console.log(data);
        const trilha = data.trilha;
        delete data.trilha;
        delete data.curso;
        if(params && params.id){
            api.put(`/conteudo/${params.id}`, data)
                .then(() => navigate('/admin/edit-conteudo', { replace: true }))
                .catch(err => console.log(err));
        } else {
            const conteudo = await api.post('/conteudo', data);
            console.log(conteudo.data);
            api.post('/trilhas/addConteudo', {id: conteudo.data._id, trilha})
                .then(() => navigate('/admin/edit-conteudo', { replace: true }))
                .catch(err => console.log(err));
        }
    },[params]);

    return (
        <>
        <LoggedAdminNavBar />
            <div className='admin-body'>
                <p>Ana, você está autendicado como <span>administrador.</span></p>
                <h1>Painel de Controle {'>'} <span>Adicionar Conteúdo</span></h1>
                <div className="container-form-admin">
                    <p>Adicionar conteúdo</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-item" style={{ display: `${params && params.id ? 'none' : 'flex'}` }}>
                            <label htmlFor="curso">Cursos</label>
                            <select  id="curso" name="curso" {...register("curso")} onChange={e => setCursoSelected(cursos.find(aux => aux.id === e.currentTarget.value))}>
                                <option value="">Selecione</option>
                                {cursos.map(curso => (
                                    <option value={curso.id}>{curso.titulo}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-item" style={{ display: `${params && params.id ? 'none' : 'flex'}` }} >
                            <label htmlFor="trilha">Trilhas</label>
                            <select id="trilha" name="trilha" {...register("trilha", {required: params && params.id ? false : true})}>
                                {!trilhas ? <option value="">Não existe trilha para este curso</option> : <option value="">Selecione</option>}
                                {trilhas.map(trilha => (
                                    <option value={trilha.titulo}>{trilha.titulo}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-item">
                            <label htmlFor="titulo">Título</label>
                            <input {...register('titulo', {required: true})} type="text" id="titulo" name="titulo" placeholder='Full Stack'/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="tipo">Tipo</label>
                            <select {...register("tipo", {required: true})}>
                                <option value="Artigo">Artigo</option>
                                <option value="Video">Video</option>
                            </select>
                        </div>
                        <div className="form-item">
                            <label htmlFor="origem">Produtor</label>
                            <input {...register('origem', {required: true})} type="text" id="origem" name="origem" placeholder='Produtor'/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="duracao">Duração</label>
                            <input {...register('duracao', {required: true})} type="text" id="duracao" name="duracao" placeholder='Duração'/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="link">Link</label>
                            <input {...register('link', {required: true})} type="text" id="link" name="link" placeholder='Link'/>
                        </div>
                        <button type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AdminAddConteudo;