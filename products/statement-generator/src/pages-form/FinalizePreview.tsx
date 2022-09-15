import React, { useContext } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import FormStateContext from 'contexts/FormStateContext';

import VisibilityIcon from '@material-ui/icons/Visibility';

import { AppUrl } from 'contexts/RoutingProps';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import Download from 'pages-form/Download';

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
  })
);

function FinalizeStep() {
  const classes = useStyles();
  const { formState } = useContext(FormStateContext);

  return (
    <ContentContainer>
      <div className={classes.purpleTitle}>
        <VisibilityIcon className={classes.purpleIcon} />
        Previewing final letter
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

      <Download />

      <FlowNavigation showNext={false} />
    </ContentContainer>
  );
}

export default FinalizeStep;
