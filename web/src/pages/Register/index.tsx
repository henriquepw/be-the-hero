import React, { FC, FormEvent, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import api from '../../services/api';
import styles from './register.module.scss';

const Register: FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const ong = {
      name,
      email,
      whatsApp,
      city,
      uf,
    };

    try {
      const response = await api.post('ongs', ong);

      alert(`Seu ID de acesso: ${response.data.id}`);

      setName('');
      setEmail('');
      setWhatsApp('');
      setCity('');
      setUf('');

      history.push('/');
    } catch {
      alert('Erro no cadastro, tente novamente mais tarde');
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} />
            Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsApp}
            onChange={(e) => setWhatsApp(e.target.value)}
          />

          <div>
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
