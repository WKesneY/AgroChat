import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/GeminiChat.scss"; 
import logo from "../assets/logo.png";
import LinhaLateral from '../assets/LinhaLateral.png';


export default function GeminiChat() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    useEffect(() => {
        axios
            .get("http://localhost:5000/chat/history", {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => setHistory(res.data))
            .catch((err) => console.error("Erro ao carregar histórico:", err));
    }, [token]);

    const sendMessage = async () => {
        try {
            const apiKey = import.meta.env.VITE_API_KEY;
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const res = await axios.post(url, {
                contents: [{ role: "user", parts: [{ text: input }] }],
            });

            const reply = res.data.candidates[0].content.parts[0].text;
            setResponse(reply);

            await axios.post(
                "http://localhost:5000/chat/save",
                { message: input, response: reply },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            const historyRes = await axios.get("http://localhost:5000/chat/history", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setHistory(historyRes.data);
        } catch (error) {
            console.error("Erro:", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="chat-container">
                {/* Imagem à esquerda */}
    <img src={LinhaLateral} alt="Imagem Esquerda" className="left-image" />
    
    {/* Imagem à direita */}
    <img src={LinhaLateral} alt="Imagem Direita" className="right-image" />

            <div className="chat-box">
                
                <div className="chat-header">                     
                    <img 
                    src={logo}>
                    </img>

                    <h1>AGRO CHAT</h1>
                </div>
                
                <div className="chat-input">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Digite sua mensagem..."
                    />
                    <button onClick={sendMessage} className="chat-button">
                        ENVIAR
                    </button>
                </div>
                <div className="chat-response">
                    <h2>RESPOSTA:</h2>
                    <p>{response}</p>
                </div>
                <div className="chat-history">
                    <h2>Histórico:</h2>
                    {history.length > 0 ? (
                        history.map((item, index) => (
                            <div key={index} className="chat-message">
                                <p><strong>Você:</strong> {item.message}</p>
                                <p><strong>AgroChat:</strong> {item.response}</p>
                                <p><small>{new Date(item.timestamp).toLocaleString()}</small></p>
                            </div>
                        ))
                    ) : (
                        <p>Nenhuma mensagem no histórico.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
