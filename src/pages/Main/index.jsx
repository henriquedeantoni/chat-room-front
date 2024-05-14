import { useNavigate } from 'react-router-dom';
import { LayoutComponentsPages } from "../../Components/LayoutComponentsPages";
import './styles.css';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useUser } from '../../hooks/UserContext';
import apiSafeScreen from '../../services/api';
import formatDate from '../../Utils/formatDate';

export const Main = () => {
  const navigate = useNavigate();  // Hook para navegação
  const [usersList, setUsersList] = useState([]);
  const [messages, setMessages] = useState([]);
  const { userData } = useUser()
 
  useEffect(() => {
    const socket = io("http://localhost:3001", { path: "/main/socket.io" });

    socket.on("connect", () => {
      console.log("Conexão estabelecida com sucesso!");

      socket.emit('newUser', userData.username);
    });

    

    // Para receber a lista de usuários ativos do servidor
    socket.on('updateActiveUsers', (activeUsers) => {
      console.log("Lista de usuários atualizada:", activeUsers);
      setUsersList(activeUsers);
    });

    return () => {
      socket.disconnect();
      console.log("Desconectado do servidor Socket.IO");
    };
  }, []);

  const goToSecureScreen = () => {
    navigate('/Tela-segura');
  };


  useEffect(() => {
    async function loadMessages() {
      try {
        const { data } = await apiSafeScreen.get(`/messages`);
        
        setMessages(data);
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    }
    loadMessages();
}, [usersList]);


  return (
    <LayoutComponentsPages>
      <div className="container">
        <div className="inner-container">
          <div className="present-users">
            <h2>Usuários Online</h2>
            {/* Aqui você pode mapear a lista de usuários presentes e renderizar */}
            <ul>
              {console.log(usersList)}
                {usersList.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
          </div>
          <div className="msg-section">
              <div className="button-container">
                <button onClick={goToSecureScreen}>Sala Disponível</button>  {/* Botão que ao clicar redireciona para /telasegura */}
              </div>
              <div className="last-messages">
                <h2>Últimas Mensagens</h2>
                
                <ul>
                {messages.map((message) => (
                  <li key={message.id}>
                    {console.log(message)}
                    <strong>Conteúdo:</strong> {message.content}<br />
                    <strong>Data:</strong> {formatDate(message.date)}<br />
                  </li>
                ))}
                </ul>
              </div>            
          </div>
        </div>
      </div>
    </LayoutComponentsPages>
  );
};
