import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useTranslation } from 'react-i18next';

/**
 * Rotate arrow 90 degrees
 *   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
 *     transform: 'rotate(90deg)',
 *   },
 */

const useStyles = makeStyles(({ palette }) =>
  createStyles({
    accordionWrapper: {
      width: '1042px',
      border: `1px solid ${palette.primary.main}`,
      borderRadius: '16px!important',
      margin: '16px 0 16px 0',
    },
  })
);
export const Accordions: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <>
      <Accordion className={classes.accordionWrapper}>
        <AccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{t('landing_page.section7Dropdown1Title')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t('landing_page.section7Dropdown1Paragraph')}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.accordionWrapper}>
        <AccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{t('landing_page.section7Dropdown2Title')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t('landing_page.section7Dropdown2Paragraph')}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.accordionWrapper}>
        <AccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
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
