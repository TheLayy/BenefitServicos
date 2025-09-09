import React from "react";
import Tittle from "./Tittle";
import styles from "./ProductsSection.module.css";

const ProductsSection = () => {
  return (
    <div className={styles.page}>
      <section className={`${styles.section} ${styles.first} ${styles.compact}`}>
        <div className={styles.imageCell}>
          <img src="/product-section-img-1.jpg" alt="Transporte" />
        </div>
        <div className={`${styles.textCell} ${styles.purple}`}>
          <div className={styles.textInner}>
            <Tittle text="Gestão de Vale Transporte" mode="claro" />
            <ul className={styles.ulWhiteOnPurple}>
              <li>Gerenciamento de vale transporte com consultores personalizados</li>
              <li>Processo automatizado - desde a geração do pedido até a entrega</li>
              <li>Cadastramento de colaboradores através de upload de arquivo</li>
              <li>Pagamento seguro e confortável através de boleto bancário</li>
              <li>Vale transporte para empresas de todo o Brasil</li>
            </ul>
            <p>Entre em contato com nossa Central de Relacionamento para mais detalhes</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.textCell} ${styles.orange}`}>
          <div className={styles.textInner}>
            <Tittle text="Vale Alimentação e Refeição" mode="escuro" />
            <p>
            A Benefit é um Canal de Vendas da Ticket - pioneira nos produtos do PAT. Com isso oferecemos:
            </p>
            <ul>
              <li>A qualidade da empresa líder do mercado de alimentação e refeição</li>
              <li>Sistema de compras 100% online e integrado com outros benefícios (vale transporte e vale combustível, entre outros)</li>
              <li>Incentivos fiscais para sua empresa através da participação no Programa de Alimentação do Trabalhador - o PAT</li>
            </ul>
            <p>Entre em contato com nossa Central de Relacionamento para mais detalhes</p>
          </div>
        </div>
        <div className={styles.imageCell}>
          <img src="/product-section-img-2.png" alt="Alimentação" />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.imageCell}>
          <img src="/product-section-img-3.png" alt="Combustível" />
        </div>
        <div className={`${styles.textCell} ${styles.purple}`}>
          <div className={styles.textInner}>
            <Tittle text="Vale Combustível" mode="claro" />
            <p>Conte com mais este produto Ticket - o Ticket Car. Muito mais comodidade para sua empresa!</p>
            <ul>
              <li>Controle total dos gastos com combustível em sua empresa</li>
              <li>Evita a necessidade de reembolso em dinheiro</li>
              <li>Permite criar um modelo de gestão de transporte</li>
            </ul>
            <p>Entre em contato com nossa Central de Relacionamento para mais detalhes</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.textCell} ${styles.orange}`}>
          <div className={styles.textInner}>
            <Tittle text="Roteirização" mode="escuro" />
            <p>Não tem controle sobre os verdadeiros custos com vale-transporte de seus colaboradores?</p>
            <p>Houve mudança de endereço e o cadastramento dos vales-transporte está desatualizado?</p>
            <p>Quer redução de custos? Solicite uma roteirização!</p>
            <p>Através deste processo, nós determinamos um percurso otimizado para cada colaborador, levando em conta o tempo e o custo da viagem.</p>
            <p>Com isso você pode trazer uma imensa economia para sua empresa.</p>
            <p>Entre em contato com nossa Central de Relacionamento para mais detalhes.</p>
          </div>
        </div>
        <div className={styles.imageCell}>
          <img src="/product-section-img-4.png" alt="Mapa" />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.imageCell}>
          <img src="/product-section-img-5.png" alt="Reunião" />
        </div>
        <div className={`${styles.textCell} ${styles.purple}`}>
          <div className={styles.textInner}>
            <Tittle text="Soluções e Negócios" mode="claro" />
            <p>Você encontra desafios na gestão de seus benefícios?</p>
            <p>Precisa de uma solução personalizada e otimizada para sua empresa?</p>
            <p>Entre em contato conosco!</p>
            <p>Nossos consultores analisarão suas particularidades e a Benefit preparará uma proposta sob medida para você.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.textCell} ${styles.orange}`}>
          <div className={styles.textInner}>
            <Tittle text="Notificações por WhatsApp" mode="escuro" />
            <p>Se você deseja manter seus colaboradores informados sobre a recarga mensal de vale-transporte e assim melhorar a comunicação, dispomos da confirmação de recarga por WhatsApp.</p>
            <p>Isso também ajuda a economizar tempo da sua equipe.</p>
            <p>Basta informar o número de telefone celular de seus colaboradores durante o processo de cadastro e ativar esta funcionalidade.</p>
            <p>Pronto! Cada vez que disponibilizarmos a recarga de vale-transporte de seus colaboradores, eles serão informados instantaneamente.</p>
            <p>Simples e prático.</p>
          </div>
        </div>
        <div className={styles.imageCell}>
          <img src="/product-section-img-6.png" alt="Smartphone" />
        </div>
      </section>
    </div>
  );
};

export default ProductsSection;
