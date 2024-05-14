import { Link, useNavigate  } from 'react-router-dom';
import { LayoutComponentsLogin } from '../../Components/LayoutComponentsLogin';
import { useState } from 'react';
import apiSafeScreen from '../../services/api';
import  {useUser}  from '../../hooks/UserContext';

export const Login = () => {
    const navigate = useNavigate();
    const { putUserData } = useUser()
    const [formData, setFormData] = useState({
        username: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log(formData)

        try {
            const response = await apiSafeScreen.post('/sessions', formData);
            console.log(response.data);
            // Armazenar dados do usuário no localStorage
            // Redirecionar para a página principal
            putUserData(response.data);
            navigate('/main');
        } catch (error) {
            console.error("Erro ao fazer login:", error.response ? error.response.data : error.message);
            const errorMessage = error.response ? error.response.data.error : error.message;
            alert(errorMessage);
        }
    };

    return (
        <LayoutComponentsLogin>
            <form className="login-form" onSubmit={handleLogin}>
                <span className="login-form-title">Olá! 👋</span>
                <div className="wrap-input">
                    <label className="input-names" htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        className="input-field"  
                        placeholder="Seu usuário" 
                        value={formData.username}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="wrap-input">
                    <label className="input-names" htmlFor="password">Senha</label>
                    <input  
                        type="password" 
                        id="password" 
                        className="input-field"  
                        placeholder="Digite sua senha de 8 digitos.." 
                        value={formData.password}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="container-login-form-btn">
                    <button type="submit" className="login-form-btn">Login</button>
                </div>
                <div className="text-center">
                    <span className="txt1"> ─────────────────────────  </span>
                    <span className='txt4'>Ou</span>
                    <span className='txt1'> ───────────────────────── </span>
                </div>
                <div className="text-center">
                    <span className="txt2">Não possui conta?</span>
                    <Link to="/" className="txt3">Cadastre-se!</Link>
                </div>
            </form>
        </LayoutComponentsLogin>
    );
}
