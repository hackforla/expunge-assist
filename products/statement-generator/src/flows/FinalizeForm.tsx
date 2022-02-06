import React, { useContext } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import FormStateContext from 'contexts/FormStateContext';

import TextPreview from 'components/TextPreview';

import { AppUrl } from 'contexts/RoutingProps';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';

import { getPreviewStatement, PREVIEW_MAP } from 'helpers/previewHelper';

const PREVIEW_LIST = Object.keys(PREVIEW_MAP).map((previewKey) => ({
  ...PREVIEW_MAP[previewKey],
  stepName: previewKey as AppUrl,
}));

const useStyles = makeStyles(({ palette, spacing }) =>
  createStyles({
    previewItem: {
      marginBottom: spacing(4),
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

  return (
    <ContentContainer>
      <div className={classes.purpleTitle}>
        <VisibilityIcon className={classes.purpleIcon} />
        Editing Final Statement
      </div>

      {PREVIEW_LIST.map((previewConfigItem) => (
        <TextPreview
          key={`${previewConfigItem.stepName}-preview-key`}
          className={classes.previewItem}
          onSaveClick={() => {}}
          content={getPreviewStatement(formState, previewConfigItem.stepName)}
          nameOfStep={previewConfigItem.title}
        />
      ))}

      <FlowNavigation />
    </ContentContainer>
  );
}

export default FinalizeForm;
