import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserRegister from './pages/UserRegister/UserRegister';
import UserLogin from './pages/UserLogin/UserLogin';
import CourseClass from './pages/CourseClass/CourseClass';
import UserCursos from './pages/UserCursosHomepage/UserCursos';
import Admin from './pages/Admin/Admin';
import AdminAddCurso from './pages/AdminAddCurso/AdminAddCurso';
import AdminListCurso from './pages/AdminListCurso/AdminListCurso';
import AdminAddTrilha from './pages/AdminAddTrilha/AdminAddTrilha';
import AdminListTrilha from './pages/AdminListTrilha/AdminListTrilha';
import AdminAddConteudo from './pages/AdminAddConteudo/AdminAddConteudo';
import AdminListConteudo from './pages/AdminListConteudo/AdminListConteudo';

function App() {

	return (
		<BrowserRouter>
			<Routes>
        		<Route path='/' element={<UserLogin />} />
				<Route path='/cadastro' element={<UserRegister />} />
				<Route path='/aula/:id' element={<CourseClass />} />
				<Route path='/cursos' element={<UserCursos />} />
				<Route path='/admin' element={<Admin />} />
				<Route path='/admin/add-curso' element={<AdminAddCurso />} />
				<Route path='/admin/list-curso' element={<AdminListCurso />} />
				<Route path='/admin/edit-curso' element={<AdminListCurso />} />
				<Route path='/admin/edit-curso/:id' element={<AdminAddCurso />} />
				<Route path='/admin/add-trilha' element={<AdminAddTrilha />} />
				<Route path='/admin/list-trilha' element={<AdminListTrilha />} />
				<Route path='/admin/edit-trilha' element={<AdminListTrilha />} />
				<Route path='/admin/del-trilha' element={<AdminListTrilha />} />
				<Route path='/admin/edit-trilha/:id' element={<AdminAddTrilha />} />
				<Route path='/admin/add-conteudo' element={<AdminAddConteudo />} />
				<Route path='/admin/list-conteudo' element={<AdminListConteudo />} />
				<Route path='/admin/edit-conteudo' element={<AdminListConteudo />} />
				<Route path='/admin/del-conteudo' element={<AdminListConteudo />} />
				<Route path='/admin/edit-conteudo/:id' element={<AdminAddConteudo />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App