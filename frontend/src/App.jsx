import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserRegister from './pages/UserRegister/UserRegister';
import UserLogin from './pages/UserLogin/UserLogin';
import LoggedUserNavbar from './components/LoggedUserNavbar/LoggedUserNavbar';

function App() {

return (
	<BrowserRouter>
		<Routes>
			<Route path='/cadastro' element={<UserRegister />} />
			<Route path='/login' element={<UserLogin />} />
			<Route path='/navbar' element={<LoggedUserNavbar />}/>
		</Routes>
	</BrowserRouter>
)}

export default App
