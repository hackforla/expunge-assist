import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import Accordion from '@mui/material/Accordion';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useTranslation } from 'react-i18next';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles(({ palette }) =>
  createStyles({
    accordionWrapper: {
      width: '80%',
      border: `1px solid ${palette.primary.main}`,
      borderRadius: '16px!important',
    },
  })
);

// className={expanded === 'panel1' ? classes.expandedText : classes.heading} // add this to the heading typography

// override default MUI styling
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(() => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    fontWeight: 'bold'
  },
}));

export const Accordions: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <>
      <Accordion
        className={classes.accordionWrapper}
        style={{ marginTop: '24px', marginBottom: '16px' }}
      >
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <Typography class="">
            {t('landing_page.section7Dropdown1Title')}
          </Typography>
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
          <Typography class="">{t('landing_page.section7Dropdown2Title')}</Typography>
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
          <Typography class="">{t('landing_page.section7Dropdown3Title')}</Typography>
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
