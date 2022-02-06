import React, { useContext } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import FormStateContext from 'contexts/FormStateContext';

import TextPreview from 'components/TextPreview';

import { AppUrl } from 'contexts/RoutingProps';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';

import { getPreviewConfig, getPreviewStatement } from 'helpers/previewHelper';

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

function FinalizeForm() {
  const classes = useStyles();
  const { formState } = useContext(FormStateContext);

  const previewConfigItem = getPreviewConfig(AppUrl.IntroductionPreview);

  return (
    <ContentContainer>
      <div className={classes.purpleTitle}>
        <VisibilityIcon className={classes.purpleIcon} />
        Editing Final Statement
      </div>

      <TextPreview
        onSaveClick={() => {}}
        content={getPreviewStatement(formState, AppUrl.IntroductionPreview)}
        nameOfStep={previewConfigItem.title}
      />

      <FlowNavigation />
    </ContentContainer>
  );
}

export default FinalizeForm;
