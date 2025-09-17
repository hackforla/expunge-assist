import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

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
    },
    textColor: {
      '& .MuiFormLabel-root': {
        color: palette.primary.darker,
      },
    },
  })
);

const ContactForm: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section aria-labelledby="contact-form-title" className={classes.card}>
      <h3 id="contact-form-title" className={classes.title}>
        {t('contact_us_page.form_title')}
      </h3>

      <Input
        id="contact-name"
        label={t('contact_us_page.name_label')}
        placeholder={t('contact_us_page.name_placeholder')}
        type="text"
        handleChange={(e) => setName(e.target.value)}
        defaultValue={name}
        className={classes.textColor}
      />

      <Input
        id="contact-email"
        label={t('contact_us_page.email_label')}
        placeholder={t('contact_us_page.email_placeholder')}
        type="email"
        handleChange={(e) => setEmail(e.target.value)}
        defaultValue={email}
      />

      <Textarea
        id="contact-message"
        label={t('contact_us_page.message_label')}
        placeholder={t('contact_us_page.message_placeholder')}
        handleChange={(e) => setMessage(e.target.value as any)}
        defaultValue={message}
        rows={6}
      />

      <div className={classes.buttonWrap}>
        <Button
          className={classes.button}
          theme="dark"
          icon={<MailOutlineIcon style={{ marginRight: 8 }} />}
          buttonText={t('contact_us_page.submit_button')}
        />
      </div>
    </section>
  );
};

export default ContactForm;
