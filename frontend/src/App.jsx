import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserRegister from './pages/UserRegister/UserRegister';

function App() {

return (
	<BrowserRouter>
		<Routes>
			<Route path='/cadastro' element={<UserRegister />} />
		</Routes>
	</BrowserRouter>
)}

export default App
