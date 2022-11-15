import React, { useEffect, useState, useCallback }  from 'react';
import {Link, useLocation} from 'react-router-dom';

import './AdminListTrilha.css';
import LoggedAdminNavBar from '../../components/LoggedAdminNavBar/LoggedAdminNavBar';
import ArrowRight from '../../assets/icons/sml-arrow-right.svg';
import DelAdmin from '../../assets/icons/del-admin.svg'
import api from '../../service/api';


const AdminListTrilha = () => {
    const [trilhas, setTrilhas] = useState([]);
    const { pathname } = useLocation();
    const [user, setUser] = useState();

	useEffect(() => {
		const localUser = localStorage.getItem('@FCAMARA_USER');
		if(localUser){
			setUser(JSON.parse(localUser));
		}
	}, []);
    useEffect(()=>{
        api.get('/api/trilhas')
            .then(response => {
                setTrilhas(response.data);
                console.log(response.data);
            })
            .catch(err => console.log(err));
    },[]);
    
    const deleteItem = useCallback((idTrilha) => {
        api.delete(`/api/trilhas/${idTrilha}`)
            .then(response => {
                setTrilhas(state => state.filter(aux => aux._id !== idTrilha));
                console.log(response.data);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <>
            <LoggedAdminNavBar />
            <div className="admin-body">
                <p>{user ? user.name : 'Admin'}, você está autendicado como <span>administrador.</span></p>
                <h1>Painel de Controle {'>'} <span>Lista de trilhas</span></h1>
                <div className="conatiner-items">
                    {trilhas.map(trilha => (
                        <div className='item-list' key={trilha._id}>
                            <Link to={pathname.includes('edit') ? `/admin/edit-trilha/${trilha._id}` : '#'} style={{cursor: `${!pathname.includes('edit') ? 'auto' : 'pointer'}`}} >
                                <h4>{trilha.titulo}</h4>
                            </Link>
                            {pathname.includes('del') ? 
                                <button onClick={() => deleteItem(trilha._id)}>
                                    <img src={DelAdmin} alt="Icone deletar" />
                                </button>
                                :
                                <></>
                            }
                            {pathname.includes('edit') ? <img src={ArrowRight} alt="Icone avançar" /> : <></> }
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AdminListTrilha;