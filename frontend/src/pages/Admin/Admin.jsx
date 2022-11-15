import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import './Admin.css';
import LoggedAdminNavBar from '../../components/LoggedAdminNavBar/LoggedAdminNavBar';
import AddAdmin from '../../assets/icons/add-admin.svg'
import EditAdmin from '../../assets/icons/edit-admin.svg'
import DelAdmin from '../../assets/icons/del-admin.svg'
import ViewAdmin from '../../assets/icons/view-admin.svg'
import ContentIcon from '../../assets/icons/content.svg'
import CourseIcon from '../../assets/icons/course.svg'
import TrilhaIcon from '../../assets/icons/trilha.svg'

const Admin = () => {
    const [option, setOption] = useState('');
    const [visibilityOptions, setVisibilityOptions] = useState(false);
    const [user, setUser] = useState();

	useEffect(() => {
		const localUser = localStorage.getItem('@FCAMARA_USER');
		if(localUser){
			setUser(JSON.parse(localUser));
		}
	}, []);

    useEffect(() => {
        console.log(option);
        if(option){
            setVisibilityOptions(true);
        } else {
            setVisibilityOptions(false);
        }
    }, [option]);

    return (
        <>
            <LoggedAdminNavBar />
            <div className='admin-body'>
                <p>{user ? user.name : 'Admin'}, você está autendicado como <span>administrador.</span></p>
                <h1>Painel de Controle</h1>
                <div id="admin-menu">
                    <Link id="btn-add" className={`btn-menu ${option === 'add' ? 'active' : ''}`} onClick={() => {
                            setOption(state => {
                                if(state === 'add') {
                                    return '';
                                }
                                return 'add'
                            });
                        }}>
                        <div>
                            <img src={AddAdmin} alt="Icone adicionar" />
                        </div>
                        <p>Adicionar</p>
                    </Link>
                    <Link id="btn-del" className={`btn-menu ${option === 'del' ? 'active' : ''}`} onClick={() => {
                            setOption(state => {
                                if(state === 'del') {
                                    return '';
                                }
                                return 'del'
                            });
                        }}>
                        <div>
                            <img src={DelAdmin} alt="Icone excluir" />
                        </div>
                        <p>Excluir</p>
                    </Link>
                    <Link id="btn-edit" className={`btn-menu ${option === 'edit' ? 'active' : ''}`} onClick={() => {
                            setOption(state => {
                                if(state === 'edit') {
                                    return '';
                                }
                                return 'edit'
                            });
                        }}>
                        <div>
                            <img src={EditAdmin} alt="Icone editar" />
                        </div>
                        <p>Editar</p>
                    </Link>
                    <Link id="btn-view" className={`btn-menu ${option === 'list' ? 'active' : ''}`} onClick={() => {
                            setOption(state => {
                                if(state === 'list') {
                                    return '';
                                }
                                return 'list'
                            });
                        }}>
                        <div>
                            <img src={ViewAdmin} alt="Icone visualizar" />
                        </div>
                        <p>Visualizar</p>
                    </Link>
                </div>
                { visibilityOptions ? 
                (
                    <>
                        <h2>Opções</h2>
                        <div id="admin-menu">
                            { option !== 'del' ? (
                                <Link to={`/admin/${option}-curso`} id="btn-curso" className='btn-menu'>
                                    <div>
                                        <img src={CourseIcon} alt="Icone adicionar" />
                                    </div>
                                    <p>Curso</p>
                                </Link>
                            ) :
                                <></>
                            }
                            <Link to={`/admin/${option}-trilha`} id="btn-trilha" className='btn-menu'>
                                <div>
                                    <img src={TrilhaIcon} alt="Icone excluir" />
                                </div>
                                <p>Trilha</p>
                            </Link>
                            <Link to={`/admin/${option}-conteudo`} id="btn-conteudo" className='btn-menu'>
                                <div>
                                    <img src={ContentIcon} alt="Icone editar" />
                                </div>
                                <p>Conteúdo</p>
                            </Link>
                        </div>
                    </>
                )
                 : <></>}
            </div>
        </>
    );
}

export default Admin;