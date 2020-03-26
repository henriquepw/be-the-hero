import React, { FC, FormEvent, useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import heroes from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import api from '../../services/api';
import styles from './logon.module.scss';

const Logon: FC = () => {
  const history = useHistory();
  const [id, setId] = useState('');

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await api.post('session', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (_) {
      alert('Tivemos um poblema :(');
    }
  }

  return (
    <div className={styles.container}>
      <section>
        <img src={logo} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input
            placeholder="Seu ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroes} alt="Heroes" />
    </div>
  );
};

export default Logon;
