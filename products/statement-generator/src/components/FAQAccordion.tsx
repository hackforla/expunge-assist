import React, { useState } from 'react';
import { makeStyles, createStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@material-ui/core/AccordionSummary';
import { styled } from '@material-ui/core/styles';

interface CustomAccordionProps {
  title: string;
  content?: string[];
}

const useStyles = makeStyles(({ palette }) =>
  createStyles({
    accordionWrapper: {
      width: '100%',
      color: palette.primary.darker,
      boxShadow: 'none',
      border: 'none',
      position: 'static',
      '& a': {
        color: palette.primary.darker,
      },
    },
    accordionSummary: {
      fontSize: '20px',
      lineHeight: '24px',
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

  '& .MuiAccordionSummary-content': {
    minHeight: 0,
  },
}));

export const FAQAccordion: React.FC<CustomAccordionProps> = ({
  title,
  content,
  children,
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
      <AccordionSummary aria-controls="panel1-content" id="panel1-header">
        <ExpandMoreRoundedIcon
          className={`${classes.expandIcon} ${
            expanded ? classes.rotateIcon : classes.rightIcon
          }`}
        />
        <Typography className={classes.accordionSummary}>{t(title)}</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ padding: 0, width: '100%' }}>
        <div className={classes.accordionDetailsContainer}>
          {content &&
            content.map((paragraph) => (
              <Typography dangerouslySetInnerHTML={{ __html: t(paragraph) }} />
            ))}
          {children && children}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
