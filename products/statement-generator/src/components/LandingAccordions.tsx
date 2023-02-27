import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { useTranslation } from 'react-i18next';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@material-ui/core/AccordionSummary';
import { styled } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) =>
  createStyles({
    accordionWrapper: {
      width: '100%',
      border: `1px solid ${palette.primary.main}`,
      borderRadius: '16px!important',
    },
    '& .accordionSummary-expandIconWrapper.accordionSummary-expanded': {
      transform: 'rotate(90deg)',
    },
  })
);

// override default MUI styling
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
))(() => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content .MuiTypography-root': {
    fontWeight: '600',
  },
}));

const LandingAccordions: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <>
      <Accordion
        className={classes.accordionWrapper}
        style={{ marginTop: '24px', marginBottom: '16px' }}
      >
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <Typography>{t('landing_page.section7Dropdown1Title')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t('landing_page.section7Dropdown1Paragraph')}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={classes.accordionWrapper}
        style={{ marginTop: '0', marginBottom: '16px' }}
      >
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          <Typography>{t('landing_page.section7Dropdown2Title')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t('landing_page.section7Dropdown2Paragraph')}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={classes.accordionWrapper}
        style={{ marginTop: '0', marginBottom: '24px' }}
      >
        <AccordionSummary aria-controls="panel3-content" id="panel3-header">
          <Typography>{t('landing_page.section7Dropdown3Title')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t('landing_page.section7Dropdown3Paragraph')}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default LandingAccordions;
