import React, { FC, useState, FormEvent } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import api from '../../services/api';
import styles from './NewIncident.module.scss';

const NewIncident: FC = () => {
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  async function handleNewIncident(e: FormEvent<HTMLFormElement>) {
    const ongId = localStorage.getItem('ongId');

    e.preventDefault();

    const incident = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', incident, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadatrar o caso, tente novamente mais tarde.');
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastro novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewIncident;
