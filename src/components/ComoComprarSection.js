import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Tittle from './Tittle';
import styles from './ComoComprarSection.module.css';

const StepSlide = ({ step, title, children, href, onlyBadge = false }) => (
  <div className={styles.slideContent}>
    <div className={styles.slideHeader}>
      {href ? (
        <a
          className={styles.badgeLink}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={[styles.stepCard, styles.pulse].join(' ')}>
            <strong>{step}{title ? `: ${title}` : ''}</strong>
          </div>
        </a>
      ) : (
        <div className={styles.stepCard}>
          <strong>{step}{title ? `: ${title}` : ''}</strong>
        </div>
      )}
    </div>
    <div className={styles.slideBody}>
      <div className={styles.copy}>{children}</div>
    </div>
  </div>
);

const steps = [
  {
    step: '1° Passo',
    title: 'Registre-se no nosso site',
    content: (
      <>
        <p>Você encontra o botão de registro na área de login (acima, à direita do menu principal). Alternativamente você pode clicar aqui.</p>
        <p>Basta preencher os dados cadastrais que lhe forem solicitados. Ao final do processo você terá um nome de usuário e uma senha de acesso, que serão utilizados sempre que você desejar realizar consultas, atualizar dados ou realizar novos pedidos.</p>
      </>
    ),
    variant: 'purple'
  },
  {
    step: '2° Passo',
    title: 'Cadastre seus colaboradores',
    content: (
      <>
        <p>Estando já dentro do nosso sistema, basta cadastrar seus colaboradores. Para isso, tenha em mãos os dados pessoais e os benefícios de cada um deles.</p>
        <p>Caso você deseje extrair as informações do seu sistema de folha de pagamento ou se você já possui um arquivo de pedido de outra gerenciadora, entre em contato conosco. Nós podemos realizar essa integração, agilizando assim o processo e poupando o seu trabalho.</p>
      </>
    ),
    variant: 'orange'
  },
  {
    step: '3° Passo',
    title: 'Feche seu pedido',
    content: (
      <>
        <p>Após cadastrar seus colaboradores, juntamente com os respectivos benefícios, basta adicionar os colaboradores ao nosso 'Carrinho de Compras' e realizar o fechamento do pedido.</p>
        <p>Você também tem a opção de gerar pedidos avulsos, ou seja, pedidos que contenham os benefícios de um único colaborador, ou de um pequeno número de colaboradores, ou mesmo de um departamento dentro de sua empresa.</p>
        <p>Ao fechar o pedido, você informará alguns dados, como a data do vencimento do boleto e o(s) endereço(s) de entrega. No final do processo você ainda terá a opção de visualizar um resumo do pedido, podendo assim fazer uma conferência dos valores.</p>
      </>
    ),
    variant: 'purple'
  },
  {
    step: '4° Passo',
    title: 'Pague o boleto',
    content: (
      <>
        <p>No momento do fechamento do pedido, nosso sistema gerará automaticamente um boleto bancário, que poderá ser pago através de seu Internet Banking ou em qualquer agência bancária.</p>
      </>
    ),
    variant: 'orange'
  },
  {
    step: 'Pronto!',
    title: '',
    content: (
      <>
        <p>Seguindo estes passos, dentro do prazo estipulado você receberá seus benefícios, já separados, embalados e prontos para a distribuição entre seus colaboradores. Se necessário, incluimos também recibos e relatórios de entrega.</p>
        <p>A partir do segundo pedido, você naturalmente só precisará atualizar a quantidade (ou valor) dos benefícios de cada colaborador e repetir os passos 3 e 4. Praticidade garantida!</p>
      </>
    ),
    variant: 'purple'
  },
  {
    step: 'Compre Aqui',
    title: '',
    href: 'https://www.benefitservicos.com.br/100.php',
    onlyBadge: true,
    variant: 'orange'
  }
];

const ComoComprarSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.pageTitle}>
          <Tittle text='Como Comprar' mode='escuro' />
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: '90%', margin: '3rem auto' }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true
          }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          style={{ height: 'auto', minHeight: '60vh' }}
        >
          {steps.map((stepData, index) => (
            <SwiperSlide key={index}>
              <div className={[styles.block, styles[stepData.variant], styles.slide].join(' ')}>
                <StepSlide
                  step={stepData.step}
                  title={stepData.title}
                  href={stepData.href}
                  onlyBadge={stepData.onlyBadge}
                >
                  {stepData.content}
                </StepSlide>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ComoComprarSection;
