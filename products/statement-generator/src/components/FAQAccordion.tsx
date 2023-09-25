import React, { useState } from 'react';
import { makeStyles, createStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion, { AccordionProps } from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@material-ui/core/AccordionSummary';
import { styled } from '@material-ui/core/styles';

interface CustomAccordionProps {
  title: string;
  content: string[];
}

type FAQAccordionProps = AccordionProps & CustomAccordionProps;

const useStyles = makeStyles(() =>
  createStyles({
    accordionWrapper: {
      width: '100%',
      boxShadow: 'none',
      border: 'none',
      position: 'static', // when position is 'relative' a vertical line appears above the accordion (unclear why)
    },
    accordionSummary: {
      fontSize: '20px',
    },
    expandIcon: {
      marginLeft: '0',
      marginRight: '16px',
      width: '24px',
      transition: 'transform 0.4s ease-in-out',
    },
    rotateIcon: {
      transform: 'rotate(360deg)',
    },
    rightIcon: {
      transform: 'rotate(270deg)',
    },
    accordionDetailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: 0,
      width: '100%',
      paddingLeft: '40px',
    },
  })
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(() => ({
  flexDirection: 'row-reverse',
  width: '100%',
  padding: 0,
  '& .MuiAccordionSummary-content .MuiTypography-root': {
    fontWeight: '400',
  },
}));

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  title,
  content,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      className={classes.accordionWrapper}
      style={{ marginTop: '24px', marginBottom: '16px' }}
      expanded={expanded}
      onChange={handleAccordionChange}
    >
      <AccordionSummary aria-controls="panel1-content" id="panel1-header">
        <ExpandMoreIcon
          className={`${classes.expandIcon} ${
            expanded ? classes.rotateIcon : classes.rightIcon
          }`}
        />
        <Typography className={classes.accordionSummary}>{t(title)}</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ padding: 0, width: '100%' }}>
        <div className={classes.accordionDetailsContainer}>
          {content.map((paragraph) => {
            return <Typography>{t(paragraph)}</Typography>;
          })}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
