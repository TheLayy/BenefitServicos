import React from 'react';
import styles from './WhatsAppButton.module.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const phoneNumber = '5511999999999'; // Replace with your WhatsApp number
  const message = 'Olá! Gostaria de mais informações sobre os serviços.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsAppIcon fontSize="large" />
    </a>
  );
};

export default WhatsAppButton;
