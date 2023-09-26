import React from 'react';
import { useTranslation } from 'react-i18next';
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
      marginTop: '24px',
      marginBottom: '12px',
    },
    // manualText styles so that text can match the text style of the accordion typography
    manualText: {
      fontSize: '1rem',
      fontFamily: 'Roboto',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    textLink: {
      color: 'black',
    }
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
          />
          <FAQAccordion
            title='faq2_page.title1.2'
            content={[
              'faq2_page.paragraph1.2a',
              'faq2_page.paragraph1.2b',
            ]}
          />
          <FAQAccordion
            title='faq2_page.title1.3'
            content={[
              'faq2_page.paragraph1.3a',
              'faq2_page.paragraph1.3b',
            ]}
          />
          <FAQAccordion
            title='faq2_page.title1.4'
            content={[
              'faq2_page.paragraph1.4a',
            ]}
          >
            <a
              href="https://selfhelp.courts.ca.gov/clean-your-record"
              target="_blank"
              rel="noreferrer"
            >
              {t('faq2_page.paragraph1.4b')}
            </a>
            <a
              href="https://www.courts.ca.gov/partners/documents/ExpSBS.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {t('faq2_page.paragraph1.4c')}
            </a>
            <a
              href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220SB731"
              target="_blank"
              rel="noreferrer"
            >
              {t('faq2_page.paragraph1.4d')}
            </a>
          </FAQAccordion>
        </section>

        <section>
          <h2 className={classes.sectionTitle}>{t('faq2_page.section2')}</h2>
          <FAQAccordion
            title='faq2_page.title2.1'
            content={[]}
          >
            {/* the two paragraph tags below aren't being pulled from the translation file because they contain links and not plain text. */}
            <p className={classes.manualText}>Expunge Assist is a tool that helps people with eligible criminal convictions in California write a declaration letter for expungement or reduction petitions. It serves as a guide that takes you through the writing process step by step. It is a free service provided by <a href="https://www.hackforla.org/" target="_blank"
              rel="noreferrer" style={{ textDecoration: 'underline' }}>Hack for LA,</a> a project under the nonprofit <a href="https://www.civictechstructure.org/" target="_blank"
              rel="noreferrer" style={{ textDecoration: 'underline' }}>Civic Tech Structure</a>.</p>
            <p>Please note that the website does not replace any professional legal advice you receive from a lawyer.</p>
          </FAQAccordion>
          <FAQAccordion
            title='faq2_page.title2.2'
            content={[
              'faq2_page.paragraph2.2a',
            ]}
          >
            {/* todo: update from hard-coded privacy policy link */}
            <p className={classes.manualText}>Check our <a href="https://expungeassist.org/#/./privacy-policy" target="_blank"
              rel="noreferrer" style={{ textDecoration: 'underline' }}>Privacy Policy</a> to learn more.</p>
          </FAQAccordion>
          <FAQAccordion
            title='faq2_page.title2.3'
            content={[
              'faq2_page.paragraph2.3a',
              'faq2_page.paragraph2.3b',
            ]}
          />
          <FAQAccordion
            title='faq2_page.title2.4'
            content={[]}
          >
            <p className={classes.manualText}>Get in touch at <a href="mailto:info@expungeassist.org"
              rel="noreferrer" style={{ textDecoration: 'underline' }}>info@expungeassist.org</a>. The laws change often in California, and that could mean some information is outdated in this website. We work to provide correct information, so please let us know if we missed something.</p>
              <p className={classes.manualText}>Please note: The information provided here is only a brief overview. We encourage you to speak with a lawyer or legal aid organization to learn about the pathway to expungement for your individual case.</p>
          </FAQAccordion>
          <FAQAccordion
            title='faq2_page.title2.5'
            content={[]}
          >
            <p className={classes.manualText}>If you have questions specific to Expunge Assist or Hack for LA such as about our site, the declaration letter generator, or operations and partner organizations, please reach out at <a href="mailto:info@expungeassist.org"
              rel="noreferrer" style={{ textDecoration: 'underline' }}>info@expungeassist.org</a>, and we will try our best to answer them.</p>
              <p className={classes.manualText}>If you have a question about the laws or are seeking legal advice for your individual case, then you should contact a lawyer or local legal aid organization.</p>
          </FAQAccordion>
        </section>

        <section>
          <h2 className={classes.sectionTitle}>{t('faq2_page.section3')}</h2>
          <FAQAccordion
            title='faq2_page.title3.1'
            content={[
              'faq2_page.paragraph3.1a',
              'faq2_page.paragraph3.1b',
              'faq2_page.paragraph3.1c',
              'faq2_page.paragraph3.1d',
            ]}
          />
          <FAQAccordion
            title='faq2_page.title3.2'
            content={[
              'faq2_page.paragraph3.2a',
              'faq2_page.paragraph3.2b',
              'faq2_page.paragraph3.2c',
            ]}
          />
          <FAQAccordion
            title='faq2_page.title3.3'
            content={[
              'faq2_page.paragraph3.3a',
              'faq2_page.paragraph3.3b',
              'faq2_page.paragraph3.3c',
            ]}
          />
          <FAQAccordion
            title='faq2_page.title3.4'
            content={[
              'faq2_page.paragraph3.4a',
              'faq2_page.paragraph3.4b',
            ]}
          />
          <FAQAccordion
            title='faq2_page.title3.5'
            content={[
              'faq2_page.paragraph3.5a',
            ]}
          />
        </section>
      </FAQContainer>
    </>
  );
}

export default FAQ2;
