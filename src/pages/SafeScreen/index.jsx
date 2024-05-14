import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { LayoutComponentsPages } from "../../Components/LayoutComponentsPages";
import './styles.css';
import apiSafeScreen from '../../services/api'; 
import { useUser } from '../../hooks/UserContext'; 

export const SafeScreen = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 
  const { userData } = useUser();

  useEffect(() => {
    const socket = io("http://localhost:3001", { path: "/safe-screen/socket.io" });

    socket.on("connect", () => {
      console.log("Conexão estabelecida com sucesso!");

      socket.emit('newUser');
    });

    socket.on('roomFull', () => {
      console.log("Sala cheia. Redirecionando...");
      navigate('/roomFull');
    });

    return () => {
      socket.disconnect();
      console.log("Desconectado do servidor Socket.IO");
    };
  }, []);

  const handleSave = (event) => {
    event.preventDefault();
    console.log(message);

    try {
      
      sendMessage();
      console.log("Mensagem enviada com sucesso!");
      navigate('/main');
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      alert("Erro ao enviar mensagem. Por favor, tente novamente.");
    }
  };

  const sendMessage = async () => {
    const localHour = new Date();
    await apiSafeScreen.post(`/messages`, { 
      content: message, 
      user_id: userData.id,
      date: localHour
    }); 
  };

  return (
    <LayoutComponentsPages>
      <div className="container-screen">
        <div className="inner-ctnr">
          <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <textarea
              placeholder="Escreva uma mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ flexGrow: 1, marginBottom: '10px' }}
            />
            <button type="submit">Enviar Menssagem</button>
          </form>
        </div>
      </div>
    </LayoutComponentsPages>
  );
};

export default SafeScreen;

