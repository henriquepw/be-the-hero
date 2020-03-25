import React, { FC } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import styles from './NewIncident.module.scss';

const NewIncident: FC = () => (
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

      <form>
        <input placeholder="Título do caso" />
        <textarea placeholder="Descrição" />
        <input placeholder="Valor em reais" />

        <button className="button" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  </div>
);

export default NewIncident;
