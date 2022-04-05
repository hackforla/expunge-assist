import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import FormStateContext from 'contexts/FormStateContext';

import TextPreview from 'components/TextPreview';

import { AppUrl } from 'contexts/RoutingProps';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

<<<<<<< HEAD:products/statement-generator/src/flows/FinalizeForm.tsx
=======
import { getSectionTitle } from 'helpers/i18nHelper';

>>>>>>> d7afa6d0d114ede41d738279f6301e4b8b8f79ce:products/statement-generator/src/pages-form/FinalizeForm.tsx
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
  const { t } = useTranslation();
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
<<<<<<< HEAD:products/statement-generator/src/flows/FinalizeForm.tsx
        nameOfStep={previewConfig.title}
=======
        nameOfStep={`${t('sections.previewing')} ${getSectionTitle(
          previewKey as AppUrl
        )}`}
>>>>>>> d7afa6d0d114ede41d738279f6301e4b8b8f79ce:products/statement-generator/src/pages-form/FinalizeForm.tsx
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
