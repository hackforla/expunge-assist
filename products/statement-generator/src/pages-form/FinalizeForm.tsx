import React, { useContext, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles } from '@material-ui/core';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

import FormStateContext from 'contexts/FormStateContext';

import TextPreview from 'components/TextPreview';

import { AppUrl } from 'contexts/RoutingProps';

import FormFlowContainer from 'components-layout/FormFlowContainer';

import { getSectionTitle } from 'helpers/i18nHelper';

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

  const previewsContainerRef = useRef<HTMLDivElement>(null);

  function updatePreviewItem(newStatement: string, stateKey: string) {
    updateStepToForm({
      statements: {
        ...formState.statements,
        [stateKey]: newStatement,
      },
    });
  }

  const previewComponents = PREVIEW_KEYS.map((previewKey, index) => {
    const statement = getPreviewStatement(formState, previewKey as AppUrl);
    const isUnused = statement === '';

    const previewConfig = PREVIEW_MAP[previewKey];

    const sectionTitle = getSectionTitle(previewKey as AppUrl);

    return (
      <TextPreview
        key={`${previewKey}-preview-key`}
        className={classes.previewItem}
        style={{ display: isUnused ? 'none' : 'block' }}
        onSaveClick={(newText: string) =>
          updatePreviewItem(newText, previewConfig.stateKey)
        }
        content={statement}
        nameOfStep={
          sectionTitle.includes('Involvement')
            ? `${t('sections.previewing')} ${sectionTitle}`
            : `${t('sections.previewing')}: ${sectionTitle}`
        }
        isFirstPreview={index === 0}
      />
    );
  });

  const contentContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    contentContainerRef.current?.focus();
  }, []);

  return (
    <FormFlowContainer
      ref={contentContainerRef}
      tabIndex={-1}
      isNextDisabled={false}
    >
      <div className={classes.purpleTitle} tabIndex={-1}>
        <VisibilityRoundedIcon className={classes.purpleIcon} />
        Editing final declaration
      </div>

      <div ref={previewsContainerRef}>{previewComponents}</div>

      <TextPreview
        className={classes.previewItem}
        onSaveClick={(newText: string) => updatePreviewItem(newText, 'closing')}
        content={formState.statements.closing}
        nameOfStep="Closing"
      />
    </FormFlowContainer>
  );
}

export default FinalizeForm;
