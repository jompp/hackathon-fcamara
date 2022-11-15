import React, { useEffect, useState }  from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';

import './AdminListCurso.css';
import LoggedAdminNavBar from '../../components/LoggedAdminNavBar/LoggedAdminNavBar';
import ArrowRight from '../../assets/icons/sml-arrow-right.svg';
import DelAdmin from '../../assets/icons/del-admin.svg'
import api from '../../service/api';


const AdminListCurso = () => {
    const [cursos, setCursos] = useState([]);
    const {pathname} = useLocation();
    useEffect(()=>{
        api.get('/curso')
            .then(response => setCursos(response.data))
            .catch(err => console.log(err));
    },[]);

    return (
        <>
            <LoggedAdminNavBar />
            <div className="admin-body">
                <p>Ana, você está autendicado como <span>administrador.</span></p>
                <h1>Painel de Controle {'>'} <span>Adicionar Curso</span></h1>
                <div className='conatiner-items'>
                    {cursos.map(curso => (
                        <div className='item-list' key={curso.id}>
                            <Link to={pathname.includes('edit') ? `/admin/edit-curso/${curso.id}` : '#'} style={{cursor: `${!pathname.includes('edit') ? 'auto' : 'pointer'}`}} >
                                <h4>{curso.titulo}</h4>
                            </Link>
                            {pathname.includes('edit') ? <img src={ArrowRight} alt="Icone avançar" /> : <></> }
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AdminListCurso;