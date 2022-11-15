import React, { useCallback, useEffect, useState }  from 'react';
import {Link, useLocation} from 'react-router-dom';

import './AdminListConteudo.css';
import LoggedAdminNavBar from '../../components/LoggedAdminNavBar/LoggedAdminNavBar';
import ArrowRight from '../../assets/icons/sml-arrow-right.svg';
import DelAdmin from '../../assets/icons/del-admin.svg'
import api from '../../service/api';


const AdminListConteudo = () => {
    const [conteudos, setConteudos] = useState([]);
    const { pathname } = useLocation();
    const [user, setUser] = useState();

	useEffect(() => {
		const localUser = localStorage.getItem('@FCAMARA_USER');
		if(localUser){
			setUser(JSON.parse(localUser));
		}
	}, []);
    useEffect(()=>{
        api.get('/api/conteudo/get-all')
            .then(response => {
                setConteudos(response.data);
                console.log(response.data);
            })
            .catch(err => console.log(err));
    },[]);

    const deleteItem = useCallback((idConteudo) => {
        api.delete(`/api/conteudo/${idConteudo}`)
            .then(response => {
                setConteudos(state => state.filter(aux => aux._id !== idConteudo));
                console.log(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <LoggedAdminNavBar />
            <div className="admin-body">
                <p>{user ? user.name : 'Admin'}, você está autendicado como <span>administrador.</span></p>
                <h1>Painel de Controle {'>'} <span>Lista de conteúdos</span></h1>
                <div className="conatiner-items">
                    {conteudos.map(conteudo => (
                        <div className='item-list' key={conteudo._id}>
                            <Link to={pathname.includes('edit') ? `/admin/edit-conteudo/${conteudo._id}` : '#'} style={{cursor: `${!pathname.includes('edit') ? 'auto' : 'pointer'}`}}>
                                <h4>{conteudo.titulo}</h4>
                            </Link>
                            {pathname.includes('del') ? 
                                <button onClick={() => deleteItem(conteudo._id)}>
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

export default AdminListConteudo;