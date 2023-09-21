import React from 'react';
import { useTranslation } from 'react-i18next';

import LinkAsText from 'components/LinkAsText';

import ContentContainer2 from 'components-layout/ContentContainer';

function FAQ2() {
  const { t } = useTranslation();

  return (
    <ContentContainer2>
      <header>
        <div>
          <h1>{t('faq2_page.page_header')}</h1>
          <p>{t('faq2_page.page_subheader')}</p>
        </div>
        {/* add image here */}
      </header>
      <section>
        <h2>{t('faq2_page.section1')}</h2>

        <h3>{t('faq2_page.title1.1')}</h3>
        <p>{t('faq2_page.paragraph1.1a')}</p>
        <p>{t('faq2_page.paragraph1.1b')}</p>
        <p>{t('faq2_page.paragraph1.1c')}</p>

        <h3>{t('faq2_page.title1.2')}</h3>
        <p>{t('faq2_page.paragraph1.2a')}</p>
        <p>{t('faq2_page.paragraph1.2b')}</p>

        <h3>{t('faq2_page.title1.3')}</h3>
        <p>{t('faq2_page.paragraph1.3a')}</p>
        <p>{t('faq2_page.paragraph1.3b')}</p>

        <h3>{t('faq2_page.title1.4')}</h3>
        <p>{t('faq2_page.paragraph1.4a')}</p>
        <p><a href="https://selfhelp.courts.ca.gov/clean-your-record">{t('faq2_page.paragraph1.4b')}</a></p>
        <p><a href="https://www.courts.ca.gov/partners/documents/ExpSBS.pdf">{t('faq2_page.paragraph1.4c')}</a></p>
        <p><a href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220SB731">{t('faq2_page.paragraph1.4d')}</a></p>
      </section>

      <section>
        <h2>{t('faq2_page.section2')}</h2>

        <h3>{t('faq2_page.title2.1')}</h3>
        <p>{t('faq2_page.paragraph2.1a')}</p>
        <p>{t('faq2_page.paragraph2.1b')}</p>

        <h3>{t('faq2_page.title2.2')}</h3>
        <p>{t('faq2_page.paragraph2.2a')}</p>
        <p>{t('faq2_page.paragraph2.2b')}</p>

        <h3>{t('faq2_page.title2.3')}</h3>
        <p>{t('faq2_page.paragraph2.3a')}</p>
        <p>{t('faq2_page.paragraph2.3b')}</p>

        <h3>{t('faq2_page.title2.4')}</h3>
        <p>{t('faq2_page.paragraph2.4a')}</p>
        <p>{t('faq2_page.paragraph2.4b')}</p>

        <h3>{t('faq2_page.title2.5')}</h3>
        <p>{t('faq2_page.paragraph2.5a')}</p>
        <p>{t('faq2_page.paragraph2.5b')}</p>
      </section>

      <section>
        <h2>{t('faq2_page.section3')}</h2>

        <h3>{t('faq2_page.title3.1')}</h3>
        <p>{t('faq2_page.paragraph3.1a')}</p>
        <p>{t('faq2_page.paragraph3.1b')}</p>
        <p>{t('faq2_page.paragraph3.1c')}</p>
        <p>{t('faq2_page.paragraph3.1d')}</p>

        <h3>{t('faq2_page.title3.2')}</h3>
        <p>{t('faq2_page.paragraph3.2a')}</p>
        <p>{t('faq2_page.paragraph3.2b')}</p>
        <p>{t('faq2_page.paragraph3.1c')}</p>

        <h3>{t('faq2_page.title3.3')}</h3>
        <p>{t('faq2_page.paragraph3.3a')}</p>
        <p>{t('faq2_page.paragraph3.3b')}</p>
        <p>{t('faq2_page.paragraph3.1c')}</p>

        <h3>{t('faq2_page.title3.4')}</h3>
        <p>{t('faq2_page.paragraph3.4a')}</p>
        <p>{t('faq2_page.paragraph3.4b')}</p>

        <h3>{t('faq2_page.title3.5')}</h3>
        <p>{t('faq2_page.paragraph3.5a')}</p>
      </section>
    </ContentContainer2>
  )
}

export default FAQ2;