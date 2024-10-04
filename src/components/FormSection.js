import PropTypes from "prop-types";
import styles from "./FormSection.module.css";
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput, Container } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useState, useRef } from 'react';
import ClientDataService from "../services/client.service";
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';


const FormSection = ({ className = "" }) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const schema = yup.object().shape({
    name: yup.string().required('Insira seu nome para continuar'),
    email: yup.string().email('E-mail inválido'),
    phone: yup
      .string()
      .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/, 'Telefone inválido') // Aceita celulares e fixos
      .min(10, 'Telefone deve ter pelo menos 10 caracteres')
      .max(15, 'Telefone deve ter no máximo 15 caracteres')
      .required('Telefone é obrigatório'),
    insurances: yup.array().min(1, 'Selecione pelo menos um seguro para cotar').required('Selecione pelo menos um seguro para cotar'),
  });

  const insuranceOptions = ['Seguro de Transporte de Cargas',
    'Seguro Empresarial',
    'Seguro de Lucros Cessantes',
    'Seguro Garantia',
    'Seguro de Risco de Engenharia',
    'Seguro de Risco Rural',
    'Seguro de Autos',
    'Seguro Residencial'];

  const { handleSubmit, control, formState: { errors }, setValue, reset } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = (data) => {
    setError(null); // Reseta o erro antes de cada envio
    setSubmitted(false); // Reseta o estado de envio

    data.timestamp = new Date().toISOString();

    ClientDataService.create(data)
      .then(() => {
        setSubmitted(true);
        Swal.fire({
          icon: 'success',
          title: 'Formulário enviado com sucesso!',
          confirmButtonText: 'Ok', // Adiciona um botão de confirmação
        }).then(() => {
          reset(); // Limpa o formulário após o popup ser fechado
        });
      })
      .catch((e) => {
        setError("Erro ao enviar o formulário. Tente novamente.");
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Erro ao enviar o formulário. Tente novamente.',
        });
      });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const insuranceParam = urlParams.get('insurance');
    if (insuranceParam && insuranceOptions.includes(insuranceParam)) {
      setValue('insurances', [insuranceParam]);
    }
  }, [setValue, insuranceOptions]);

  const formatPhoneNumber = (value) => {
    const rawValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    if (rawValue.length > 10) {
      return `(${rawValue.substring(0, 2)}) ${rawValue.substring(2, 7)}-${rawValue.substring(7, 11)}`; // Celular com 11 dígitos
    } else if (rawValue.length > 6) {
      return `(${rawValue.substring(0, 2)}) ${rawValue.substring(2, 6)}-${rawValue.substring(6, 10)}`; // Fixo com 10 dígitos
    } else if (rawValue.length > 2) {
      return `(${rawValue.substring(0, 2)}) ${rawValue.substring(2)}`; // Apenas o código de área e parte do número
    } else if (rawValue.length > 0) {
      return `(${rawValue}`; // Apenas o código de área
    }
    return rawValue; // Caso esteja vazio
  };

  return (
    <div id="form" className={[styles.formSection, className].join(" ")}>
      <div className={[styles.formContainer, "container"].join(" ")}>
        <div className={styles.textBox}>
          <div className={styles.title}>
            <div>Encontre</div>
            <div>o melhor seguro para você</div>
          </div>
          <p className={styles.text}>
            Nosso objetivo é proporcionar tranquilidade através de soluções de
            seguro completas e acessíveis.
          </p>
        </div>
        <div className={styles.formBox}>
          <div className={styles.formTitle}>Faça sua cotação</div>
          <Container maxWidth="sm" className={styles.formContainerInner}>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Seu nome"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    size="small"
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ''}
                    InputLabelProps={{ className: styles.inputLabel }}
                    InputProps={{ className: styles.input }}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="E-mail"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    size="small"
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                    InputLabelProps={{ className: styles.inputLabel }}
                    InputProps={{ className: styles.input }}
                  />
                )}
              />
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Telefone"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    size="small"
                    value={field.value}
                    onChange={(e) => {
                      const formattedValue = formatPhoneNumber(e.target.value); // Aplica a formatação
                      field.onChange(formattedValue); // Passa o valor formatado ao controlador
                    }}
                    error={!!errors.phone}
                    helperText={errors.phone ? errors.phone.message : ''}
                    InputLabelProps={{ className: styles.inputLabel }}
                    InputProps={{ className: styles.input }}
                  />
                )}
              />

              <FormControl variant="outlined" margin="normal" fullWidth error={!!errors.insurances}>
                <InputLabel id="insurance-label" className={styles.inputLabel}>Seguro para cotar</InputLabel>
                <Controller
                  name="insurances"
                  control={control}
                  defaultValue={[]} // Valor inicial como array vazio
                  render={({ field }) => {
                    const [open, setOpen] = useState(false); // Estado para controlar o menu

                    const handleClose = () => setOpen(false); // Função para fechar o menu

                    return (
                      <Select
                        {...field}
                        labelId="insurance-label"
                        label="Seguro para cotar"
                        multiple
                        open={open} // Controla se o menu está aberto
                        onOpen={() => setOpen(true)} // Abre o menu
                        onClose={handleClose} // Fecha o menu
                        value={Array.isArray(field.value) ? field.value : []} // Garante que o valor seja sempre um array
                        onChange={(event) => {
                          const value = event.target.value;
                          field.onChange(Array.isArray(value) ? value : [value]); // Garante que sempre seja array
                        }}
                        input={<OutlinedInput label="Seguro para cotar" className={styles.input} />}
                        renderValue={(selected) => selected.join(', ')}
                      >
                        {insuranceOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            <Checkbox checked={Array.isArray(field.value) && field.value.indexOf(option) > -1} />
                            <ListItemText primary={option} />
                          </MenuItem>
                        ))}

                        {/* MenuItem para confirmar a seleção */}
                        <MenuItem onClick={handleClose}>
                          <Button color="primary" fullWidth>
                            Confirmar
                          </Button>
                        </MenuItem>
                      </Select>
                    );
                  }}
                />
                {errors.insurances && <Typography color="error">{errors.insurances.message}</Typography>}
              </FormControl>

              <Button type="submit" variant="contained" color="primary" fullWidth className={styles.button}>
                Enviar
              </Button>

            </form>
          </Container>
        </div>
      </div>
    </div>
  );
};

FormSection.propTypes = {
  className: PropTypes.string,
};

export default FormSection;
