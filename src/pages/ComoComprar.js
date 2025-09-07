import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import styles from './ComoComprar.module.css';

const ComoComprar = () => {
  return (
    <Layout>
      <Section title="Como Comprar" id="como-comprar">
        <div className={styles.content}>
          <p>Conteúdo da página Como Comprar será adicionado aqui.</p>
        </div>
      </Section>
    </Layout>
  );
};

export default ComoComprar;
