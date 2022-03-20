import React, { useContext } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import FormStateContext from 'contexts/FormStateContext';

import TextPreview from 'components/TextPreview';

import { AppUrl } from 'contexts/RoutingProps';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

import {
  getPreviewStatement,
  PREVIEW_MAP,
  PREVIEW_KEYS,
} from 'helpers/previewHelper';

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
  const { formState, updateStepToForm } = useContext(FormStateContext);

  function updatePreviewItem(newStatement: string, stateKey: string) {
    updateStepToForm({
      statements: {
        ...formState.statements,
        [stateKey]: newStatement,
      },
    });
  }

  const previewComponents = PREVIEW_KEYS.map((previewKey) => {
    const statement = getPreviewStatement(formState, previewKey as AppUrl);
    if (statement === '') {
      return null;
    }

    const previewConfig = PREVIEW_MAP[previewKey];

    return (
      <TextPreview
        key={`${previewKey}-preview-key`}
        className={classes.previewItem}
        onSaveClick={(newText: string) =>
          updatePreviewItem(newText, previewConfig.stateKey)
        }
        content={statement}
        nameOfStep={previewConfig.title}
      />
    );
  });

  return (
    <ContentContainer>
      <div className={classes.purpleTitle}>
        <VisibilityIcon className={classes.purpleIcon} />
        Editing Final Statement
      </div>

      {previewComponents}

      <FlowNavigation />
    </ContentContainer>
  );
}

export default FinalizeForm;
