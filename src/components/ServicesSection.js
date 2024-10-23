import Card from "./Card";
import Tittle from "./Tittle";
import PropTypes from "prop-types";
import styles from "./ServicesSection.module.css";
import SlideShow from "./SlideShow";

const ServicesSection = ({ className = "" }) => {
  return (
    <div id="produtos" className={[styles.servicesSection, className].join(" ")}>
      <div className={styles.container}>
        <img
          className={styles.sectionSepIcon}
          alt=""
          src="/orange-section-sep-icon.png"
        />
        <Tittle
          text="Encontre as melhores cotações de seguros"
        />
        <div className={styles.sectionSubtitle}>
          Serviços de seguros completos, adaptados às suas necessidades
        </div>
        <div className={styles.cards}>
          <div className={styles.notReverse}>
            <Card
              insurance="Seguro de Autos"
              label1="Seguros de"
              label2="Autos"
              color="dark"
              img="services/car-icon.png"
              backText="O seguro de autos oferece proteção financeira e assistência em caso de acidentes, roubo, e outros incidentes que possam danificar o veículo ou causar prejuízos ao proprietário e a terceiros"
            />
            <Card
              insurance="Seguro de Transporte de Cargas"
              label1="Seguro de"
              label2="Transporte"
              label3="de Cargas"
              color="light"
              img="services/transportation-icon.png"
              backText="O seguro de transporte de cargas oferece cobertura para mercadorias durante o transporte terrestre, aéreo ou marítimo. Ele protege contra danos, extravios e roubos que podem ocorrer durante o percurso, garantindo a segurança financeira do proprietário da carga."
            />
          </div>
          <div className={styles.reverse}>
            <Card
              insurance="Seguro Residencial"
              label1="Seguro"
              label2="Residencial"
              color="light"
              img="services/house-icon.png"
              backText="O seguro residencial oferece proteção para residências contra diversos tipos de riscos, como incêndios, furtos, desastres naturais e danos elétricos. Além de cobrir a estrutura da casa, pode incluir a proteção de bens pessoais e assistência residencial para emergências."
            />
            <Card
              insurance="Seguro Empresarial"
              label1="Seguro"
              label2="Empresarial"
              color="dark"
              img="services/company-icon.png"
              backText="O seguro empresarial é projetado para proteger empresas de diversos portes contra riscos operacionais, como incêndios, furtos, danos elétricos e desastres naturais. Além disso, pode incluir coberturas específicas para equipamentos, responsabilidade civil e interrupção de negócios."
            />
          </div>
          <div className={styles.notReverse}>
            <Card
              insurance="Seguro de Lucros Cessantes"
              label1="Seguro de"
              label2="Lucros"
              label3="Cessantes"
              color="dark"
              img="services/investment-icon.png"
              backText="O seguro de lucros cessantes cobre a perda de receita que uma empresa pode sofrer devido à interrupção de suas atividades, causada por eventos cobertos, como incêndios ou desastres naturais. Ele ajuda a manter a estabilidade financeira da empresa durante o período de recuperação."
            />
            <Card
              insurance="Seguro Garantia"
              label1="Seguro"
              label2="Garantia"
              color="light"
              img="services/contract-icon.png"
              backText="O seguro garantia é utilizado para garantir o cumprimento de obrigações contratuais, seja em contratos de construção, fornecimento ou prestação de serviços. Ele protege o contratante contra possíveis inadimplências ou descumprimentos por parte do contratado."
            />
          </div>
          <div className={styles.reverse}>
            <Card
              insurance="Seguro de Risco Rural"
              label1="Seguro de"
              label2="Risco Rural"
              color="ligth"
              img="services/farm-icon.png"
              backText="O seguro de risco rural é voltado para o setor agrícola, oferecendo cobertura para plantações, criações de animais e equipamentos agrícolas. Protege contra eventos adversos como secas, granizos, pragas e doenças, ajudando a manter a sustentabilidade do negócio rural."
            />
            <Card
              insurance="Seguro de Risco de Engenharia"
              label1="Seguro de"
              label2="Risco de"
              label3="Engenharia"
              color="dark"
              img="services/engeneering-icon.png"
              backText="O seguro de risco de engenharia oferece proteção para obras de construção civil, montagem e instalação de equipamentos. Cobre danos materiais que possam ocorrer durante a execução do projeto, incluindo acidentes, erros de projeto e falhas técnicas."
            />
          </div>
          <div className={styles.notReverse}>
            <Card
              insurance="Seguro Viagem"
              label1="Seguro"
              label2="Viagem"
              color="dark"
              img="services/flight-icon.png"
              backText="O seguro viagem oferece proteção e assistência durante viagens nacionais ou internacionais. Cobre despesas médicas, extravio de bagagem, cancelamento de voos, e outros imprevistos, garantindo uma viagem mais tranquila e segura."
            />
          </div>
        </div>
        <SlideShow />
        <div className={styles.link} onClick={() => window.open("https://www.benefitservicos.com.br/index3.php", "_blank")}>
          <img className={styles.icon} alt="" src="/blue-arrow-icon.svg" />
          <div className={styles.label}>Conheça nossos outros serviços</div>
        </div>
      </div>
    </div>
  );
};

ServicesSection.propTypes = {
  className: PropTypes.string,
};

export default ServicesSection;
