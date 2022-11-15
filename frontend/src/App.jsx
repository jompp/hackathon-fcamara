import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserRegister from './pages/UserRegister/UserRegister';
import UserLogin from './pages/UserLogin/UserLogin';
import CourseClass from './pages/CourseClass/CourseClass';
import UserCursos from './pages/UserCursosHomepage/UserCursos';
import Admin from './pages/Admin/Admin';
import AdminAddCurso from './pages/AdminAddCurso/AdminAddCurso';

function App() {

return (
	<BrowserRouter>
		<Routes>
			<Route path='/cadastro' element={<UserRegister />} />
			<Route path='/login' element={<UserLogin />} />
			<Route path='/aula/:id' element={<CourseClass />} />
			<Route path='/cursos' element={<UserCursos />} />
			<Route path='/admin' element={<Admin />} />
			<Route path='/admin/add-curso' element={<AdminAddCurso />} />
		</Routes>
	</BrowserRouter>
)}

export default App
