import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Theme, makeStyles, createStyles } from '@material-ui/core';
import jsPDF from 'jspdf';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import EmailIcon from '@material-ui/icons/Email';
import GetAppIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import { generateFinal } from 'helpers/previewHelper';

import FormStateContext from 'contexts/FormStateContext';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import ContentContainer from 'components-layout/ContentContainer';

import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles(() =>
  createStyles({
    buttonSpacing: {
      marginBottom: '1rem',
    },
    downloadButtonsContainer: {
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& button': {
        width: '50%',
        '& svg': {
          marginRight: '1rem',
        },
      },
    },
  })
);

function Download() {
  const { t } = useTranslation();
  const classes = useStyles();
  const { formState } = useContext(FormStateContext);
  const utilityClasses = useUtilityStyles();
  const history = useHistory();

  // disable all buttons unless consent is checked
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClickCheck = (event: any) => {
    setIsDisabled(!event.target.checked);
  };

  // create a mailto link with the statement in the body
  const finalStatement = generateFinal(formState);

  const mailtoLink = `mailto:?&subject=my%20personal%20statement&body=+${encodeURIComponent(
    finalStatement
  )}`;

  // send email
  const handleClickEmail = () => {
    window.open(mailtoLink);
  };

  // copy to clipboard
  const handleClickClipboard = () => {
    navigator.clipboard.writeText(finalStatement);
  };

  // download txt
  const handleClickTXT = () => {
    const blob = new Blob([finalStatement], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const div = document.createElement('div');
    const a = document.createElement('a');
    document.body.appendChild(div);
    div.appendChild(a);

    a.innerHTML = '&nbsp;';
    div.style.width = '0';
    div.style.height = '0';
    a.href = url;
    a.download = 'MyPersonalStatement.txt';

    const ev = new MouseEvent('click', {});
    a.dispatchEvent(ev);

    document.body.removeChild(div);
    window.URL.revokeObjectURL(url);
  };

  // download pdf
  const handleClickPDF = () => {
    const doc = new jsPDF('p', 'mm', 'letter');
    doc.setFontSize(12);
    const lines = doc.splitTextToSize(finalStatement, 170);
    doc.text(20, 50, lines);
    doc.save('MyPersonalStatement.pdf');
  };

  const buttonText = (smallText: string, bigText: string) => {
    const matches = useMediaQuery<Theme>((theme) =>
      theme.breakpoints.down('sm')
    );
    if (matches) {
      return smallText;
    }
    return bigText;
  };

  return (
    <ContentContainer>
      <form>
        <Checkbox
          checked={!isDisabled}
          onChange={handleClickCheck}
          label={t('download_page.agreement_checkbox_label')}
        />
        <div className={classes.downloadButtonsContainer}>
          <Button
            className={classes.buttonSpacing}
            onClick={handleClickEmail}
            disabled={isDisabled}
            icon={<EmailIcon />}
            buttonText={buttonText('email', t('download_page.email_btn'))}
          />
          <Button
            className={classes.buttonSpacing}
            onClick={handleClickClipboard}
            disabled={isDisabled}
            icon={<FileCopyIcon />}
            buttonText={buttonText('copy', t('download_page.clipboard_btn'))}
          />
          <Button
            className={classes.buttonSpacing}
            onClick={handleClickTXT}
            disabled={isDisabled}
            icon={<GetAppIcon />}
            buttonText={buttonText('txt', t('download_page.txt_btn'))}
          />
          <Button
            className={classes.buttonSpacing}
            onClick={handleClickPDF}
            disabled={isDisabled}
            icon={<GetAppIcon />}
            buttonText={buttonText('pdf', t('download_page.pdf_btn'))}
          />
        </div>
      </form>

      <div className={utilityClasses.buttonContainer}>
        <Button
          onClick={() => history.goBack()}
          buttonText="Back"
          theme="transparent-on-light"
        />
      </div>
    </ContentContainer>
  );
}

export default Download;
