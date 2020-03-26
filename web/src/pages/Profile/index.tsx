import React, { FC, useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import api from '../../services/api';
import styles from './profile.module.scss';

interface Incident {
  id: number;
  title: string;
  description: string;
  value: number;
  ong: {
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
}

const Profile: FC = () => {
  const ongName = localStorage.getItem('ongName');

  const history = useHistory();
  const [incidents, setIncidents] = useState<Incident[]>([]);

  useEffect(() => {
    async function getData() {
      const ongId = localStorage.getItem('ongId');

      const response = await api.get('profile', {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(response.data);
    }

    getData();
  }, []);

  async function handleDeleteIncident(id: number) {
    const ongId = localStorage.getItem('ongId');

    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (err) {
      alert('Error ao deletar o caso :(');
    }
  }

  function handleLogout() {
    localStorage.removeItem('ongName');
    localStorage.removeItem('ongId');

    history.push('/');
  }

  return (
    <div className={styles.container}>
      <header>
        <img src={logo} alt="Be the Hero" />
        <span>Bem vindo(a), {ongName}</span>

        <Link className="button" to="/incident/new">
          Cadastrar novo caso
        </Link>

        <button type="button" onClick={handleLogout}>
          <FiPower size={18} />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>Caso</strong>
            <p>{incident.title}</p>

            <strong>Descrição</strong>
            <p>{incident.description}</p>

            <strong>Valor</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
