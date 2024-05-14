import { Routes, Route } from 'react-router-dom';
//import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Main } from '../pages/Main';
import { Login } from '../pages/Login';
import { SafeScreen } from '../pages/SafeScreen';

function AppRouter(){
    return (
        <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register2" element={<Register />} />
                <Route path="/main" element={<Main />} />
                <Route path="/Tela-segura" element={<SafeScreen />} />

        </Routes>
    );
}


export default AppRouter

