import React, { FC } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import styles from './register.module.scss';

const Register: FC = () => (
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

      <form>
        <input placeholder="Nome da ONG" />
        <input placeholder="E-mail" type="email" />
        <input placeholder="WhatsApp" />

        <div>
          <input placeholder="Cidade" />
          <input placeholder="UF" style={{ width: 80 }} />
        </div>

        <button className="button" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  </div>
);

export default Register;
