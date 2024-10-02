import PropTypes from "prop-types";
import styles from "./FormSection.module.css";
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput, Container } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import ClientDataService from "../services/client.service";

const FormSection = ({ className = "" }) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const schema = yup.object().shape({
    name: yup.string().required('Insira seu nome para continuar'),
    email: yup.string().email('E-mail inválido'),
    phone: yup.string().matches(/^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/, 'Telefone inválido').required('Telefone é obrigatório'),
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

  const { handleSubmit, control, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = (data) => {
    setError(null); // Reseta o erro antes de cada envio
    setSubmitted(false); // Reseta o estado de envio

    data.timestamp = new Date().toISOString();

    ClientDataService.create(data)
      .then(() => {
        setSubmitted(true); // Define como submetido após sucesso
      })
      .catch((e) => {
        setError("Erro ao enviar o formulário. Tente novamente."); // Define mensagem de erro em caso de falha
      });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const insuranceParam = urlParams.get('insurance');
    if (insuranceParam && insuranceOptions.includes(insuranceParam)) {
      setValue('insurances', [insuranceParam]);
    }
  }, [setValue, insuranceOptions]);

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
            {submitted ? (
              <Typography variant="h6" color="primary">Formulário enviado com sucesso!</Typography>
            ) : (
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
                    defaultValue={[]}
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="insurance-label"
                        label="Seguro para cotar"
                        multiple
                        input={<OutlinedInput label="Seguro para cotar" className={styles.input} />}
                        renderValue={(selected) => selected.join(', ')}
                      >
                        {insuranceOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            <Checkbox checked={field.value.indexOf(option) > -1} />
                            <ListItemText primary={option} />
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  {errors.insurances && <Typography color="error">{errors.insurances.message}</Typography>}
                </FormControl>
                {error && <Typography color="error">{error}</Typography>}
                <Button type="submit" variant="contained" color="primary" fullWidth className={styles.button}>
                  Enviar
                </Button>

              </form>)}
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
