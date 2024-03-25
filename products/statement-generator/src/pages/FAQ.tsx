import React from 'react';
import { useTranslation } from 'react-i18next';
import ContentContainer from 'components-layout/ContentContainer';
import { makeStyles, createStyles } from '@material-ui/core';
import { FAQAccordion } from 'components/FAQAccordion';
import faqDesktop from '../assets/faqDesktop.svg';

const useStyles = makeStyles(({ palette, breakpoints }) =>
  createStyles({
    Header: {
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: palette.primary.lighter,
      marginBottom: '12px',

      [breakpoints.down('sm')]: {
        minHeight: '509px',
      },
    },
    HeaderContent: {
      maxWidth: '945px',
      minWidth: '342px',
      width: '100%',
      margin: '45px auto 54.64px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      [breakpoints.down('md')]: {
        flexDirection: 'column',
        width: '100%',
        margin: '24px 16px',
        gap: '36px',
      },
    },
    HeaderText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: palette.primary.lighter,
      flex: '1 1 60%',
      marginRight: '36px',

      [breakpoints.down('md')]: {
        marginRight: 0,
        alignItems: 'center',
      },

      [breakpoints.down('sm')]: {
        gap: '24px',
      },
    },
    Heading: {
      fontSize: '34px',
      lineHeight: '51px',
      marginBotton: '16px',
      fontWeight: 700,
    },
    SubHeading: {
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: 400,

      [breakpoints.down(breakpoints.values.lg)]: {
        textAlign: 'center',
      },
    },
    ImgContainer: {
      width: '100%',
      textAlign: 'center',
      flex: '1 1 40%',
      marginRight: '16px',
    },
    Img: {
      width: 'auto',
      maxWidth: '100%',
      minWidth: '182px',
    },
    FAQContainer: {
      maxWidth: '980px',
      width: '100%',
      paddingTop: 0,

      [breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    sectionTitle: {
      color: palette.primary.main,
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: 600,
      boxShadow: 'none',
      border: 'none',
      marginTop: '24px',
      marginBottom: '12px',

      [breakpoints.down('sm')]: {
        marginTop: '24px',
      },
    },
  })
);

export const FAQHeader: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <header className={classes.Header}>
      <div className={classes.HeaderContent}>
        <div className={classes.HeaderText}>
          <h2 className={classes.Heading}>{t('faq_page.page_header')}</h2>
          <p className={classes.SubHeading}>{t('faq_page.page_subheader')}</p>
        </div>
        <div className={classes.ImgContainer}>
          <img
            className={classes.Img}
            src={faqDesktop}
            alt="Two people talking"
          />
        </div>
      </div>
    </header>
  );
};

function FAQ() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <FAQHeader />
      <ContentContainer className={classes.FAQContainer}>
        <section>
          <h3 className={classes.sectionTitle}>{t('faq_page.section1')}</h3>
          <FAQAccordion
            title="faq_page.title1.1"
            content={[
              'faq_page.paragraph1.1a',
              'faq_page.paragraph1.1b',
              'faq_page.paragraph1.1c',
            ]}
          />
          <FAQAccordion
            title="faq_page.title1.2"
            content={['faq_page.paragraph1.2a', 'faq_page.paragraph1.2b']}
          />
          <FAQAccordion
            title="faq_page.title1.3"
            content={['faq_page.paragraph1.3a', 'faq_page.paragraph1.3b']}
          />
          <FAQAccordion
            title="faq_page.title1.4"
            content={[
              'faq_page.paragraph1.4a',
              'faq_page.paragraph1.4b',
              'faq_page.paragraph1.4c',
              'faq_page.paragraph1.4d',
            ]}
          />
        </section>

        <section>
          <h2 className={classes.sectionTitle}>{t('faq_page.section2')}</h2>
          <FAQAccordion
            title="faq_page.title2.1"
            content={['faq_page.paragraph2.1a', 'faq_page.paragraph2.1b']}
          />
          <FAQAccordion
            title="faq_page.title2.2"
            content={['faq_page.paragraph2.2a', 'faq_page.paragraph2.2b']}
          />
          <FAQAccordion
            title="faq_page.title2.3"
            content={['faq_page.paragraph2.3a', 'faq_page.paragraph2.3b']}
          />
          <FAQAccordion
            title="faq_page.title2.4"
            content={['faq_page.paragraph2.4a', 'faq_page.paragraph2.4b']}
          />
          <FAQAccordion
            title="faq_page.title2.5"
            content={['faq_page.paragraph2.5a', 'faq_page.paragraph2.5b']}
          />
        </section>

        <section>
          <h2 className={classes.sectionTitle}>{t('faq_page.section3')}</h2>
          <FAQAccordion
            title="faq_page.title3.1"
            content={[
              'faq_page.paragraph3.1a',
              'faq_page.paragraph3.1b',
              'faq_page.paragraph3.1c',
              'faq_page.paragraph3.1d',
            ]}
          />
          <FAQAccordion
            title="faq_page.title3.2"
            content={[
              'faq_page.paragraph3.2a',
              'faq_page.paragraph3.2b',
              'faq_page.paragraph3.2c',
            ]}
          />
          <FAQAccordion
            title="faq_page.title3.3"
            content={[
              'faq_page.paragraph3.3a',
              'faq_page.paragraph3.3b',
              'faq_page.paragraph3.3c',
            ]}
          />
          <FAQAccordion
            title="faq_page.title3.4"
            content={['faq_page.paragraph3.4a', 'faq_page.paragraph3.4b']}
          />
          <FAQAccordion
            title="faq_page.title3.5"
            content={['faq_page.paragraph3.5a']}
          />
        </section>
      </ContentContainer>
    </>
  );
}

export default FAQ;
