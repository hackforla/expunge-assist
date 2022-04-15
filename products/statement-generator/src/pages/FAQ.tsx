import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';
import LinkAsText from 'components/LinkAsText';

import ContentContainer from 'components-layout/ContentContainer';

import useUtilityStyles from 'styles/utilityStyles';

function FAQ() {
  const { t } = useTranslation();
  const utilityClasses = useUtilityStyles({
    pageTheme: 'dark',
  });
  const history = useHistory();

  return (
    <ContentContainer>
      <h2>{t('faq_page.page_header')}</h2>

      <h3>{t('faq_page.title1')}</h3>
      <p>{t('faq_page.paragraph1')}</p>

      <h3>{t('faq_page.title2')}</h3>
      <p>{t('faq_page.paragraph2')}</p>

      <h3>{t('faq_page.title3')}</h3>
      <p>{t('faq_page.paragraph3')}</p>

      <h3>{t('faq_page.title4')}</h3>
      <p>{t('faq_page.paragraph4')}</p>

      <h3>{t('faq_page.title5')}</h3>
      <p>{t('faq_page.paragraph5')}</p>
      <p>{t('faq_page.paragraph5b')}</p>
      <p>
        {t('faq_page.paragraph5c')}
        <LinkAsText link="https://www.courts.ca.gov/documents/Prop47FAQs.pdf" />
      </p>

      <h3>{t('faq_page.title6')}</h3>
      <p>{t('faq_page.paragraph6')}</p>
      <p>{t('faq_page.paragraph6b')}</p>
      <p>{t('faq_page.paragraph6c')}</p>
      <p>
        {t('faq_page.paragraph6d')}
        <LinkAsText link="https://drugpolicy.org/sites/default/files/Prop64-Resentencing-Guide-July2017.pdf" />
      </p>

      <h3>{t('faq_page.title7')}</h3>
      <p>{t('faq_page.paragraph7')}</p>

      <h3>{t('faq_page.title8')}</h3>
      <p>{t('faq_page.paragraph8')}</p>

      <h3>{t('faq_page.title9')}</h3>
      <p>{t('faq_page.paragraph9')}</p>

      <h3>{t('faq_page.title10')}</h3>
      <p>{t('faq_page.paragraph10')}</p>

      <div className={utilityClasses.buttonContainer}>
        <Button
          onClick={() => history.goBack()}
          buttonText="Back"
          theme="transparent-on-light"
        />
      </div>
    </ContentContainer>
  );
}

export default FAQ;
