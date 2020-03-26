import React, { useState,useEffect } from 'react';
import logoImg from '../../assets/logo.svg';
import { Link,  useHistory  } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';

export default function Profile(){
    const [casos, setCasos] = useState([]);
    const history = useHistory();
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    useEffect(() => {
        api.get('profile',{
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setCasos(response.data);
        })
    }, [ongId]);

    async function deletarCasos(id){
        try {
            await api.delete(`casos/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setCasos(casos.filter(casos => casos.id != id));
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function logout(){
        localStorage.clear();

        history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/casos/new">Cadastrar novo caso</Link>
                <button onClick={logout} type="button"><FiPower size={18} color="#e02041" /></button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {casos.map(casos => (
                    <li key={casos.id}>
                        <strong>CASO:</strong>
                        <p>{casos.title}</p>

                        <strong>DESCRIÇÂO:</strong>
                        <p>{casos.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(casos.value)}</p>

                        <button onClick={() => deletarCasos(casos.id)} type="button"><FiTrash2 size={20} color="#a8a8b3"/> </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}