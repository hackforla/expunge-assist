import React from 'react';
import { useTranslation } from 'react-i18next';

import LinkAsText from 'components/LinkAsText';

import ContentContainer from 'components-layout/ContentContainer';

function FAQ() {
  const { t } = useTranslation();

  return (
    <ContentContainer>
      <h2>{t('faq_page.page_header')}</h2>

      <h3>{t('faq_page.title1')}</h3>
      <p>{t('faq_page.paragraph1')}</p>

      <h3>{t('faq_page.title2')}</h3>
      <p>{t('faq_page.paragraph2')}</p>
      <p>{t('faq_page.paragraph2b')}</p>
      <p>{t('faq_page.paragraph2c')}</p>
      <p>{t('faq_page.paragraph2d')}</p>
      <p>{t('faq_page.paragraph2e')}</p>

      <h3>{t('faq_page.title3')}</h3>
      <p>{t('faq_page.paragraph3')}</p>
      <p>{t('faq_page.paragraph3b')}</p>

      <h3>{t('faq_page.title4')}</h3>
      <p>{t('faq_page.paragraph4')}</p>
      <p>{t('faq_page.paragraph4b')}</p>
      <p>{t('faq_page.paragraph4c')}</p>

      <h3>{t('faq_page.title5')}</h3>
      <p>{t('faq_page.paragraph5')}</p>
      <p>{t('faq_page.paragraph5b')}</p>
      <ul>
        <li>{t('faq_page.paragraph5b_li1')}</li>
        <li>{t('faq_page.paragraph5b_li2')}</li>
        <li>{t('faq_page.paragraph5b_li3')}</li>
      </ul>
      <p>{t('faq_page.paragraph5c')}</p>
      <p>{t('faq_page.paragraph5d')}</p>
      <ul>
        <li>{t('faq_page.paragraph5d_li1')}</li>
        <li>{t('faq_page.paragraph5d_li2')}</li>
        <li>{t('faq_page.paragraph5d_li3')}</li>
        <li>{t('faq_page.paragraph5d_li4')}</li>
        <li>{t('faq_page.paragraph5d_li5')}</li>
        <li>{t('faq_page.paragraph5d_li6')}</li>
      </ul>
      <p>
        {t('faq_page.paragraph5e')}
        <LinkAsText link="https://www.courts.ca.gov/documents/Prop47FAQs.pdf" />
      </p>

      <h3>{t('faq_page.title6')}</h3>
      <p>{t('faq_page.paragraph6')}</p>
      <p>{t('faq_page.paragraph6b')}</p>
      <ul>
        <li>{t('faq_page.paragraph6b_li1')}</li>
        <li>{t('faq_page.paragraph6b_li2')}</li>
        <li>{t('faq_page.paragraph6b_li3')}</li>
        <li>{t('faq_page.paragraph6b_li4')}</li>
      </ul>

      <p>{t('faq_page.paragraph6c')}</p>
      <p>{t('faq_page.paragraph6d')}</p>
      <ul>
        <li>{t('faq_page.paragraph6d_li1')}</li>
        <li>{t('faq_page.paragraph6d_li2')}</li>
        <li>{t('faq_page.paragraph6d_li3')}</li>
        <li>{t('faq_page.paragraph6d_li4')}</li>
      </ul>
      <p>{t('faq_page.paragraph6e')}</p>
      <p>{t('faq_page.paragraph6f')}</p>
      <p>
        {t('faq_page.paragraph6g')}
        <LinkAsText link="https://drugpolicy.org/sites/default/files/Prop64-Resentencing-Guide-July2017.pdf" />
      </p>

      <h3>{t('faq_page.title7')}</h3>
      <p>{t('faq_page.paragraph7')}</p>
      <p>{t('faq_page.paragraph7b')}</p>

      <h3>{t('faq_page.title8')}</h3>
      <p>{t('faq_page.paragraph8')}</p>

      <h3>{t('faq_page.title9')}</h3>
      <p>{t('faq_page.paragraph9')}</p>
      <p>{t('faq_page.paragraph9b')}</p>

      <h3>{t('faq_page.title10')}</h3>
      <p>{t('faq_page.paragraph10')}</p>
      <p>{t('faq_page.paragraph10b')}</p>
    </ContentContainer>
  );
}

export default FAQ;
