import React, { useState } from 'react';
import {
  createStyles,
  makeStyles,
  darken,
  useTheme,
  TextField,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import MailIcon from '@material-ui/icons/Mail';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { createContactFormSchema, ContactFormData } from './schema';
import Input from '../Input';
import Textarea from '../Textarea';
import Button from '../Button';
import type { CSSVarsPartial } from '../Input';

const useStyles = makeStyles(({ palette }) =>
  createStyles({
    card: {
      borderRadius: 16,
      padding: 24,
      boxShadow: '0 8px 32px rgba(61, 0, 102, 0.15)',
    },
    title: {
      fontSize: '1.75rem',
      fontWeight: 600,
      margin: '0 0 16px 0',
    },
    buttonWrap: {
      marginTop: 24,
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      minWidth: 200,
      color: palette.primary.darker,
      backgroundColor: palette.primary.dark,
      border: `1px solid ${palette.primary.dark}`,
      fontWeight: 400,
      '&:hover': {
        backgroundColor: darken(palette.primary.dark, 0.12),
      },
    },
  })
);
// @ts-ignore
const Test = (props) => <OutlinedInput {...props} />;

const ContactForm: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
    register,
  } = useForm<ContactFormData>({
    resolver: zodResolver(createContactFormSchema(t)),
    mode: 'onTouched',
    // reValidateMode: 'onChange',
    defaultValues: { name: '', email: '', message: '' },
  });

  // console.log('schema', createContactFormSchema(t));

  const onSubmit = (data: ContactFormData) => console.log(data);

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  const styleVars = {
    '--outline-color': theme.palette.primary.darker,
    '--placeholder-color': theme.palette.primary.dark,
    '--text-color': theme.palette.primary.darker,
    '--hover-color': theme.palette.primary.darker,
  } as CSSVarsPartial;

  return (
    <section aria-labelledby="contact-form-title" className={classes.card}>
      <h3 id="contact-form-title" className={classes.title}>
        {t('contact_us_page.form_title')}
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              id="contact-name"
              label={t('contact_us_page.name_label')}
              placeholder={t('contact_us_page.name_placeholder')}
              type="text"
              handleChange={field.onChange}
              customStyles={styleVars}
              {...field}
              isExternallyControlled
              isExternallyValid={fieldState.isTouched && !fieldState.error}
            />
          )}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              id="contact-email"
              label={t('contact_us_page.email_label')}
              placeholder={t('contact_us_page.email_placeholder')}
              type="email"
              handleChange={field.onChange}
              customStyles={styleVars}
              {...field}
              isExternallyControlled
              isExternallyValid={fieldState.isTouched && !fieldState.error}
            />
          )}
        />
        {errors.email && <p>{errors.email.message}</p>}

        {/*

        <Textarea
          id="contact-message"
          label={t('contact_us_page.message_label')}
          placeholder={t('contact_us_page.message_placeholder')}
          handleChange={(e) => setMessage(e.target.value as any)}
          defaultValue={message}
          rows={6}
          customStyles={styleVars as any}
        /> */}

        <div className={classes.buttonWrap}>
          <Button
            className={classes.button}
            theme="dark"
            icon={<MailIcon style={{ marginRight: 8 }} />}
            buttonText={t('contact_us_page.submit_button')}
            disabled={!isValid || isSubmitting}
            // onClick={() => handleSubmit(onSubmit)()}
            onClick={handleSubmit(onSubmit)}
            // type="submit"
          />
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
