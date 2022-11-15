import React from 'react';
import {Link} from 'react-router-dom';

import './Admin.css';
import LoggedAdminNavBar from '../../components/LoggedAdminNavBar/LoggedAdminNavBar';
import AddAdmin from '../../assets/icons/add-admin.svg'
import EditAdmin from '../../assets/icons/edit-admin.svg'
import DelAdmin from '../../assets/icons/del-admin.svg'
import ViewAdmin from '../../assets/icons/view-admin.svg'

const Admin = () => {
  return (
    <>
        <LoggedAdminNavBar />
        <div className='admin-body'>
            <p>Ana, você está autendicado como <span>administrador.</span></p>
            <h1>Painel de Controle</h1>
            <div id="admin-menu">
                <Link id="btn-add" className='btn-menu'>
                    <div>
                        <img src={AddAdmin} alt="Icone adicionar" />
                    </div>
                    <p>Adicionar</p>
                </Link>
                <Link id="btn-del" className='btn-menu'>
                    <div>
                        <img src={DelAdmin} alt="Icone excluir" />
                    </div>
                    <p>Excluir</p>
                </Link>
                <Link id="btn-edit" className='btn-menu'>
                    <div>
                        <img src={EditAdmin} alt="Icone editar" />
                    </div>
                    <p>Editar</p>
                </Link>
                <Link id="btn-view" className='btn-menu'>
                    <div>
                        <img src={ViewAdmin} alt="Icone visualizar" />
                    </div>
                    <p>Visualizar</p>
                </Link>
            </div>

            <h2>Opções</h2>
            <div id="admin-menu">
                <Link id="btn-curso" className='btn-menu'>
                    <div>
                        <img src={AddAdmin} alt="Icone adicionar" />
                    </div>
                    <p>Curso</p>
                </Link>
                <Link id="btn-trilha" className='btn-menu'>
                    <div>
                        <img src={DelAdmin} alt="Icone excluir" />
                    </div>
                    <p>Trilha</p>
                </Link>
                <Link id="btn-conteudo" className='btn-menu'>
                    <div>
                        <img src={EditAdmin} alt="Icone editar" />
                    </div>
                    <p>Conteúdo</p>
                </Link>
            </div>
        </div>
    </>
  );
}

export default Admin;