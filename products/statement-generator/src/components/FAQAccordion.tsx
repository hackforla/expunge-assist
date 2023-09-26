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
  content?: string[];
}

// type FAQAccordionProps = AccordionProps & CustomAccordionProps;


const useStyles = makeStyles(({ palette }) =>
  createStyles({
    accordionWrapper: {
      width: '100%',
      marginTop: '0px',
      marginBottom: '0px',
      color: palette.primary.darker,
      boxShadow: 'none',
      border: 'none',
      position: 'static', // when position is 'relative' or not specified a vertical line appears above the accordion (unclear why)
    },
    accordionSummary: {
      fontSize: '20px',
      lineHeight: '24px',
      color: palette.primary.darker,
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
    margin: 0,
  },
}));

export const FAQAccordion: React.FC<CustomAccordionProps> = ({
  title,
  content,
  children
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
      expanded={expanded}
      onChange={handleAccordionChange}
    >
      <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <ExpandMoreIcon
          className={`${classes.expandIcon} ${
            expanded ? classes.rotateIcon : classes.rightIcon
          }`}
        />
        <Typography className={classes.accordionSummary}>{t(title)}</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ padding: 0, width: '100%' }}>
        <div className={classes.accordionDetailsContainer}>
          {content && content.map((paragraph) => {
            return <Typography>{t(paragraph)}</Typography>;
          })}
          {children && children}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
