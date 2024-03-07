import React, { useContext, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import FormStateContext from 'contexts/FormStateContext';

import TextPreview from 'components/TextPreview';

import { AppUrl } from 'contexts/RoutingProps';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

import { getSectionTitle } from 'helpers/i18nHelper';

import {
  getPreviewStatement,
  PREVIEW_MAP,
  PREVIEW_KEYS,
} from 'helpers/previewHelper';

import { AffirmationContext } from 'contexts/AffirmationContext';

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

  const { affirmationData } = useContext(AffirmationContext);

  const previewsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!affirmationData.isActive) {
      const firstFocusableElement = previewsContainerRef.current?.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="0"])'
      );

      if (firstFocusableElement instanceof HTMLElement) {
        firstFocusableElement.focus();
      }
    }
  }, [affirmationData.isActive]);

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
      />
    );
  });

  return (
    <ContentContainer>
      <div className={classes.purpleTitle}>
        <VisibilityIcon className={classes.purpleIcon} />
        Editing final letter
      </div>

      <div ref={previewsContainerRef}>{previewComponents}</div>

      <TextPreview
        className={classes.previewItem}
        onSaveClick={(newText: string) => updatePreviewItem(newText, 'closing')}
        content={formState.statements.closing}
        nameOfStep="Closing"
      />

      <FlowNavigation />
    </ContentContainer>
  );
}

export default FinalizeForm;
