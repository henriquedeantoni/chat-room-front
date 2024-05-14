import { Link, useNavigate,  } from 'react-router-dom';
import { LayoutComponentsLogin } from "../../Components/LayoutComponentsLogin";
import './styles.css';
import { useState } from 'react';
import apiSafeScreen from '../../services/api';
import  {useUser}  from '../../hooks/UserContext';

export const Register = () => {
    const navigate = useNavigate();
    const { putUserData } = useUser()

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleCadastrar = async (event) => {
        event.preventDefault();

        // Validação básica do formulário
        if (formData.password !== formData.confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }

        try {
            const response = await apiSafeScreen.post('/users', {
                name: formData.name,
                username: formData.username,
                password: formData.password
            });
            console.log(response.data);
            putUserData(response.data);
            navigate('/Main');
        } catch (error) {
            console.error("Erro ao cadastrar:", error.response ? error.response.data : error.message);
            alert("Erro ao cadastrar usuário. Verifique os dados e tente novamente.");
        }
    };

    
    return (
        <LayoutComponentsLogin>
            <form className="login-form" onSubmit={handleCadastrar}>
                <span className="login-form-title">Cadastre-se</span>
                <span className="login-form-title1">Preencha os campos para concluir<br /> seu cadastro</span>
                <div className="wrap-input">
                    <label className="input-names" htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="input-field" 
                        placeholder="Informe seu nome..."
                        value={formData.name}
                        onChange={handleChange} 
                    />
                </div>
                <div className="wrap-input">
                    <label className="input-names" htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        className="input-field" 
                        placeholder="seu nome de usuário"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="wrap-input">
                    <label className="input-names" htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="input-field" 
                        placeholder="Digite sua senha de 8 dígitos..."
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="wrap-input">
                    <label className="input-names" htmlFor="confirmPassword">Confirme a Senha</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        className="input-field" 
                        placeholder="Confirme a senha..."
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <div className="container-login-form-btn">
                    <button type="submit" className="login-form-btn">Cadastrar</button>
                </div>
                <div className="text-center">
                    <span className="txt2">Já possui conta? </span>
                    <Link to="/login" className="txt3">Clique Aqui!</Link>
                </div>
            </form>
        </LayoutComponentsLogin>
    );
};
