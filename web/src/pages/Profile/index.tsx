import React, { FC } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import styles from './profile.module.scss';

const Profile: FC = () => (
  <div className={styles.container}>
    <header>
      <img src={logo} alt="Be the Hero" />
      <span>Bem vinda, APAD</span>

      <Link className="button" to="/incidents/new">
        Cadastrar novo caso
      </Link>

      <button type="button">
        <FiPower size={18} />
      </button>
    </header>

    <h1>Casos cadastrados</h1>

    <ul>
      <li>
        <strong>Caso</strong>
        <p>Caso Teste</p>

        <strong>Descrição</strong>
        <p>Descrição Teste</p>

        <strong>Valor</strong>
        <p>R$ 120</p>

        <button type="button">
          <FiTrash2 size={20} />
        </button>
      </li>

      <li>
        <strong>Caso</strong>
        <p>Caso Teste</p>

        <strong>Descrição</strong>
        <p>Descrição Teste</p>

        <strong>Valor</strong>
        <p>R$ 120</p>

        <button type="button">
          <FiTrash2 size={20} />
        </button>
      </li>

      <li>
        <strong>Caso</strong>
        <p>Caso Teste</p>

        <strong>Descrição</strong>
        <p>Descrição Teste</p>

        <strong>Valor</strong>
        <p>R$ 120</p>

        <button type="button">
          <FiTrash2 size={20} />
        </button>
      </li>

      <li>
        <strong>Caso</strong>
        <p>Caso Teste</p>

        <strong>Descrição</strong>
        <p>Descrição Teste</p>

        <strong>Valor</strong>
        <p>R$ 120</p>

        <button type="button">
          <FiTrash2 size={20} />
        </button>
      </li>
    </ul>
  </div>
);

export default Profile;
