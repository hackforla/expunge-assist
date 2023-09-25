import React from 'react';
import { useTranslation } from 'react-i18next';
import LinkAsText from 'components/LinkAsText';
import FAQContainer from 'components-layout/FAQContainer';
import { makeStyles, createStyles } from '@material-ui/core';
import { FAQHeader } from 'components/FAQHeader';
import { FAQAccordion } from 'components/FAQAccordion';

const useStyles = makeStyles(({ palette }) =>
  createStyles({
    sectionTitle: {
      color: palette.primary.main,
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: 600,
      boxShadow: 'none',
      border: 'none',
      marginTop: '36px',
    },
  })
);

function FAQ2() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      <FAQHeader />
      <FAQContainer>
        <section>
          <h3 className={classes.sectionTitle}>{t('faq2_page.section1')}</h3>
          <FAQAccordion
            title="faq2_page.title1.1"
            content={[
              'faq2_page.paragraph1.1a',
              'faq2_page.paragraph1.1b',
              'faq2_page.paragraph1.1c',
            ]}
          >
            .
          </FAQAccordion>

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
          <p>
            <a href="https://selfhelp.courts.ca.gov/clean-your-record">
              {t('faq2_page.paragraph1.4b')}
            </a>
          </p>
          <p>
            <LinkAsText link="https://www.courts.ca.gov/partners/documents/ExpSBS.pdf">
              {t('faq2_page.paragraph1.4c')}
            </LinkAsText>
          </p>
          <p>
            <LinkAsText link="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220SB731">
              {t('faq2_page.paragraph1.4d')}
            </LinkAsText>
          </p>
        </section>

        <section>
          <h2 className={classes.sectionTitle}>{t('faq2_page.section2')}</h2>

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
          <h2 className={classes.sectionTitle}>{t('faq2_page.section3')}</h2>

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
      </FAQContainer>
    </>
  );
}

export default FAQ2;
