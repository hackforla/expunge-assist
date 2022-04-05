import React, { useContext } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import FormStateContext from 'contexts/FormStateContext';

import VisibilityIcon from '@material-ui/icons/Visibility';

import { AppUrl } from 'contexts/RoutingProps';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

import { getPreviewStatement, PREVIEW_KEYS } from 'helpers/previewHelper';

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

function FinalizeStep() {
  const classes = useStyles();
  const { formState } = useContext(FormStateContext);

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

<<<<<<< HEAD:products/statement-generator/src/flows/FinalizePreview.tsx
        { PREVIEW_KEYS.map((previewKey) => {
          const statement = getPreviewStatement(formState, previewKey as AppUrl);
=======
        {PREVIEW_KEYS.map((previewKey) => {
          const statement = getPreviewStatement(
            formState,
            previewKey as AppUrl
          );

>>>>>>> d7afa6d0d114ede41d738279f6301e4b8b8f79ce:products/statement-generator/src/pages-form/FinalizePreview.tsx
          if (statement === '') {
            return null;
          }

<<<<<<< HEAD:products/statement-generator/src/flows/FinalizePreview.tsx
          return <p>{statement}</p>

=======
          return <p key={`${previewKey}-final-paragraph-key`}>{statement}</p>;
>>>>>>> d7afa6d0d114ede41d738279f6301e4b8b8f79ce:products/statement-generator/src/pages-form/FinalizePreview.tsx
        })}
      </div>

      <FlowNavigation />
    </ContentContainer>
  );
}

export default FinalizeStep;
