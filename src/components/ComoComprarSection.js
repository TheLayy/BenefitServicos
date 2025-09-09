import React from "react";
import Tittle from "./Tittle";
import styles from "./ComoComprarSection.module.css";

const Step = ({ variant = "purple", step, title, children, href, onlyBadge = false }) => (
  <div className={[styles.block, styles[variant], onlyBadge ? styles.onlyBadge : ""].join(" ")}>
    <div className={styles.left}>
      {href ? (
        <a
          className={styles.badgeLink}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={[styles.stepCard, styles.pulse].join(" ")}> 
            <strong>{step}</strong>
            {title ? <div>{title}</div> : null}
          </div>
        </a>
      ) : (
        <div className={styles.stepCard}>
          <strong>{step}</strong>
          {title ? <div>{title}</div> : null}
        </div>
      )}
    </div>
    <div className={styles.right}>
      <div className={styles.copy}>{children}</div>
    </div>
  </div>
);

const ComoComprarSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.pageTitle}>
          <Tittle text="Como Comprar" mode="escuro" />
        </div>
      </div>

      <Step variant="purple" step="1° Passo" title="Registre-se no nosso site">
        <p>Você encontra o botão de registro na área de login (acima, à direita do menu principal). Alternativamente você pode clicar aqui.</p>
        <p>Basta preencher os dados cadastrais que lhe forem solicitados. Ao final do processo você terá um nome de usuário e uma senha de acesso, que serão utilizados sempre que você desejar realizar consultas, atualizar dados ou realizar novos pedidos.</p>
      </Step>

      <Step variant="orange" step="2° Passo" title="Cadastre seus colaboradores">
        <p>Estando já dentro do nosso sistema, basta cadastrar seus colaboradores. Para isso, tenha em mãos os dados pessoais e os benefícios de cada um deles.</p>
        <p>Caso você deseje extrair as informações do seu sistema de folha de pagamento ou se você já possui um arquivo de pedido de outra gerenciadora, entre em contato conosco. Nós podemos realizar essa integração, agilizando assim o processo e poupando o seu trabalho.</p>
      </Step>

      <Step variant="purple" step="3° Passo" title="Feche seu pedido">
        <p>Após cadastrar seus colaboradores, juntamente com os respectivos benefícios, basta adicionar os colaboradores ao nosso "Carrinho de Compras" e realizar o fechamento do pedido.</p>
        <p>Você também tem a opção de gerar pedidos avulsos, ou seja, pedidos que contenham os benefícios de um único colaborador, ou de um pequeno número de colaboradores, ou mesmo de um departamento dentro de sua empresa.</p>
        <p>Ao fechar o pedido, você informará alguns dados, como a data do vencimento do boleto e o(s) endereço(s) de entrega. No final do processo você ainda terá a opção de visualizar um resumo do pedido, podendo assim fazer uma conferência dos valores.</p>
      </Step>

      <Step variant="orange" step="4° Passo" title="Pague o boleto">
        <p>No momento do fechamento do pedido, nosso sistema gerará automaticamente um boleto bancário, que poderá ser pago através de seu Internet Banking ou em qualquer agência bancária.</p>
      </Step>

      <Step variant="purple" step="Pronto!">
        <p>Seguindo estes passos, dentro do prazo estipulado você receberá seus benefícios, já separados, embalados e prontos para a distribuição entre seus colaboradores. Se necessário, incluimos também recibos e relatórios de entrega.</p>
        <p>A partir do segundo pedido, você naturalmente só precisará atualizar a quantidade (ou valor) dos benefícios de cada colaborador e repetir os passos 3 e 4. Praticidade garantida!</p>
      </Step>

      <Step
        variant="orange"
        step="Compre Aqui"
        title=""
        href="https://www.benefitservicos.com.br/100.php"
        onlyBadge
      />
      
    </div>
  );
};

export default ComoComprarSection;
