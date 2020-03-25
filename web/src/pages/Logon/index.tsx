import React, { FC } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import heroes from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import styles from './logon.module.scss';

const Logon: FC = () => (
  <div className={styles.container}>
    <section>
      <img src={logo} alt="Be The Hero" />
      <form>
        <h1>Faça seu Logon</h1>
        <input placeholder="Seu ID" />
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

export default Logon;
