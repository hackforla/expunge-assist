import React, { useState } from 'react';
import { createStyles, makeStyles, useTheme } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import MailIcon from '@material-ui/icons/Mail';

import { createContactFormSchema, ContactFormData } from './schema';
import Input from '../Input';
import Textarea from '../Textarea';
import Button from '../Button';
import type { CSSVarsPartial } from '../Input';
import ErrorMessage from './ErrorMessage';
import ThankYou from './ThankYou';

const useStyles = makeStyles(({ palette, spacing, breakpoints }) =>
  createStyles({
    card: {
      borderRadius: 16,
      padding: 24,
      boxShadow: '0 8px 32px rgba(61, 0, 102, 0.15)',
    },
    title: {
      fontSize: 'clamp(1.5rem, 1.2rem + 1vw, 2rem)',
      fontWeight: 600,
      margin: spacing(0, 0, 3, 0),
      [breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    },
    error: {
      color: palette.error.main,
      lineHeight: 1,
      visibility: 'hidden',
      opacity: 0,
      marginTop: 0,
      transition: 'opacity 0.2s ease, margin-top 0.2s ease',
    },
    showError: {
      visibility: 'visible',
      opacity: 1,
      marginTop: 5,
    },
    buttonWrap: {
      marginTop: 24,
      display: 'flex',
      justifyContent: 'center',
    },
  })
);

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ContactForm: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const { t } = useTranslation();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(createContactFormSchema(t)),
    mode: 'onTouched',
    defaultValues: { name: '', email: '', message: '' },
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async () => {
    try {
      // Mock POST request
      await sleep(1000);
      setSubmitted(true);
    } catch (error) {
      // swallow errors for this demo; keep form visible
      setSubmitted(false);
    }
  };

  const handleReturnToForm = () => {
    reset({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  const styleVars = {
    '--outline-color': theme.palette.primary.darker,
    '--placeholder-color': theme.palette.primary.dark,
    '--text-color': theme.palette.primary.darker,
    '--hover-color': theme.palette.primary.darker,
  } as CSSVarsPartial;

  return (
    <>
      {submitted ? (
        <ThankYou onReturn={handleReturnToForm} />
      ) : (
        <section aria-labelledby="contact-form-title" className={classes.card}>
          <h3 id="contact-form-title" className={classes.title}>
            {t('contact_us_page.form_title')}
          </h3>
          <form>
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
                  errorBorder={fieldState.invalid}
                />
              )}
            />

            <ErrorMessage
              errorMessage={errors.name?.message}
              classError={classes.error}
              classShowError={classes.showError}
            />

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
                  isExternallyValid={
                    fieldState.isTouched && !fieldState.invalid
                  }
                  errorBorder={fieldState.invalid}
                />
              )}
            />

            <ErrorMessage
              errorMessage={errors.email?.message}
              classError={classes.error}
              classShowError={classes.showError}
            />

            <Controller
              name="message"
              control={control}
              render={({ field, fieldState }) => (
                <Textarea
                  id="contact-message"
                  label={t('contact_us_page.message_label')}
                  placeholder={t('contact_us_page.message_placeholder')}
                  handleChange={field.onChange}
                  rows={6}
                  customStyles={styleVars as any}
                  {...field}
                  errorBorder={fieldState.invalid}
                />
              )}
            />

            <ErrorMessage
              errorMessage={errors.message?.message}
              classError={classes.error}
              classShowError={classes.showError}
            />

            <div className={classes.buttonWrap}>
              <Button
                theme="dark"
                fullWidth
                icon={<MailIcon style={{ marginRight: 8 }} />}
                buttonText={t('contact_us_page.submit_button')}
                disabled={!isValid || isSubmitting}
                onClick={handleSubmit(onSubmit)}
              />
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default ContactForm;
