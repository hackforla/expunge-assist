import React, { useRef, useEffect, useContext, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';
import { AppUrl } from 'contexts/RoutingProps';
import { AffirmationContext } from 'contexts/AffirmationContext';

import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

import InfoBlock from 'components/InfoBlock';

import FormFlowContainer from 'components-layout/FormFlowContainer';
import Download from 'pages-form/Download';
import DoneImg from 'assets/done-img.svg';

import { getPreviewStatement, PREVIEW_KEYS } from 'helpers/previewHelper';

const useStyles = makeStyles(({ palette, spacing }) =>
  createStyles({
    preview: {
      padding: '15px',
      boxShadow: '4px 4px 16px rgba(61, 0, 102, 0.25)',
      borderRadius: '20px',
      whiteSpace: 'pre-line',
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
    contentMargin: {
      marginBottom: spacing(4),
    },
  })
);

function FinalizeStep() {
  const { t } = useTranslation();
  const classes = useStyles();
  const { formState } = useContext(FormStateContext);
  const [disableNext, setDisableNext] = useState(true);
  const { updateAffirmationData } = useContext(AffirmationContext);

  const contentContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    contentContainerRef.current?.focus();
  }, []);

  return (
    <FormFlowContainer ref={contentContainerRef} tabIndex={-1} isNextDisabled={disableNext} nextButtonLabel="RETURN HOME" onNavClick={() =>
      updateAffirmationData({
        isActive: true,
        titleText: 'affirmation_popup.done.titleText',
        description: 'affirmation_popup.done.description',
        buttonText: 'button.returnHome',
        backButtonText: 'button.back',
        image: DoneImg,
      })}>
      <div className={classes.purpleTitle}>
        <VisibilityRoundedIcon className={classes.purpleIcon} />
        {t('finalize_preview.header_title')}
      </div>

      <div className={classes.preview}>
        <p>{formState.statements.heading}</p>

        {PREVIEW_KEYS.map((previewKey) => {
          const statement = getPreviewStatement(
            formState,
            previewKey as AppUrl
          );

          if (statement === '') {
            return null;
          }

          return <p key={`${previewKey}-final-paragraph-key`}>{statement}</p>;
        })}

        <p>{formState.statements.closing}</p>
      </div>

      <InfoBlock
        className={classes.contentMargin}
        title={t('finalize_preview.review_info_title')}
      >
        {t('finalize_preview.review_info_content')}
      </InfoBlock>

      <Download
        onDownloadAgreementCheck={(isChecked) => setDisableNext(!isChecked)}
      />
    </FormFlowContainer>
  );
}

export default FinalizeStep;
