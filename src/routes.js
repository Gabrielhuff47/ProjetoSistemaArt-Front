import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Login';
import  Home from '../src/pages/Home';
import CadastroDeEpico from '../src/pages/CadastroDeEpico';
import CadastroDeEpico2 from './pages/CadastroDeEpico2';

export default function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path = '/home' element={<Home />} />
                <Route path ='/CadastroDeEpico' element={<CadastroDeEpico />} />
                <Route path ='/CadastroDeEpico2' element={<CadastroDeEpico2 />} />
            </Routes>
        </Router>
    );

}