import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { IStepState } from 'contexts/FormStateProps';
import { AppUrl } from 'contexts/RoutingProps';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';

import { getPreviewStatement } from 'helpers/previewHelper';

const useStyles = makeStyles(({ palette }) =>
  createStyles({
    preview: {
      padding: '15px',
      boxShadow: '4px 4px 16px rgba(61, 0, 102, 0.25)',
      borderRadius: '20px',
      whiteSpace: 'pre-line',

      '& p': {
        marginBottom: 15,
      },
    },
    purpleTitle: {
      color: palette.primary.main,
      fontStyle: 'italic',
      fontSize: '20px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    purpleIcon: {
      color: palette.primary.main,
      fontSize: '20px',
      marginRight: '0.5rem',
    },
  })
);

interface IFinalizeStepProps {
  formState: IStepState;
}

const FinalizeStep = ({ formState }: IFinalizeStepProps) => {
  const classes = useStyles();

  const displayDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <ContentContainer>
      <div className={classes.purpleTitle}>
        <VisibilityIcon className={classes.purpleIcon} />
        Previewing Final Statement
      </div>

      <div className={classes.preview}>
        <span>{`${displayDate},\n\n`}</span>
        <span>{`To whom it may concern,\n\n`}</span>
        <p>{getPreviewStatement(formState, AppUrl.Introduction)}</p>
        <p>{getPreviewStatement(formState, AppUrl.JobPreview)}</p>
        <p>{getPreviewStatement(formState, AppUrl.CommunityServicePreview)}</p>
        <p>{getPreviewStatement(formState, AppUrl.RecoveryPreview)}</p>
        <p>{getPreviewStatement(formState, AppUrl.SchoolPreview)}</p>
        <p>{getPreviewStatement(formState, AppUrl.ParentingPreview)}</p>
        <p>{getPreviewStatement(formState, AppUrl.UnemployedPreview)}</p>
        <p>{getPreviewStatement(formState, AppUrl.GoalsPreview)}</p>
        <p>{getPreviewStatement(formState, AppUrl.WhyPreview)}</p>
      </div>

      <FlowNavigation />
    </ContentContainer>
  );
};

export default FinalizeStep;
