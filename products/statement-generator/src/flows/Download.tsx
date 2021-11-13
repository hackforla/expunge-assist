import React, { useState } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';
import jsPDF from 'jspdf';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {
  generateIntroduction,
  generateInvolvementJob,
  generateInvolvementCommunity,
  generateInvolvementRecovery,
  generateInvolvementSchool,
  generateInvolvementParenting,
  generateInvolvementUnemployed,
  generateFutureGoals,
  generateWhy,
} from 'helpers/StatementHelpers';

import useUtilityStyles from 'styles/utilityStyles';
import { IStepState } from 'contexts/FormStateProps';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import EmailIcon from '@material-ui/icons/Email';
import GetAppIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles(() =>
  createStyles({
    buttonSpacing: {
      marginBottom: '1rem',
    },
  })
);

interface IFinalizeStepProps {
  formState: IStepState;
}

const Download = ({ formState }: IFinalizeStepProps) => {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles();

  // disable all buttons unless consent is checked
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClickCheck = (event: any) => {
    setIsDisabled(!event.target.checked);
  };

  // create a mailto link with the statement in the body
  const str = `${generateIntroduction(formState)}
  ${generateInvolvementJob(formState)}
  ${generateInvolvementCommunity(formState)}
  ${generateInvolvementRecovery(formState)}
  ${generateInvolvementSchool(formState)}
  ${generateInvolvementParenting(formState)}
  ${generateInvolvementUnemployed(formState)} ${generateFutureGoals(formState)}
  ${generateWhy(formState)}`;
  const mailtoLink = `mailto:?&subject=my%20personal%20statement&body=+${encodeURIComponent(
    str
  )}`;

  // send email
  const handleClickEmail = () => {
    window.open(mailtoLink);
  };

  // copy to clipboard
  const handleClickClipboard = () => {
    navigator.clipboard.writeText(str);
  };

  // download txt
  const handleClickTXT = () => {
    const blob = new Blob([str], { type: 'text/plain' });
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
    const lines = doc.splitTextToSize(str, 170);
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
    <div className={utilityClasses.contentContainer}>
      <form>
        <Checkbox
          checked={!isDisabled}
          onChange={handleClickCheck}
          label="By checking this box you take full responsibility for this personal
            statement, and release all association with Hack for LA."
        />
        <div className={utilityClasses.downloadButtonsContainer}>
          <Button
            className={classes.buttonSpacing}
            onClick={handleClickEmail}
            disabled={isDisabled}
            icon={<EmailIcon />}
            buttonText={buttonText('email', 'send in an email')}
          />
          <Button
            className={classes.buttonSpacing}
            onClick={handleClickClipboard}
            disabled={isDisabled}
            icon={<FileCopyIcon />}
            buttonText={buttonText('copy', 'copy to clipboard')}
          />
          <Button
            className={classes.buttonSpacing}
            onClick={handleClickTXT}
            disabled={isDisabled}
            icon={<GetAppIcon />}
            buttonText={buttonText('txt', 'download txt')}
          />
          <Button
            className={classes.buttonSpacing}
            onClick={handleClickPDF}
            disabled={isDisabled}
            icon={<GetAppIcon />}
            buttonText={buttonText('pdf', 'download pdf')}
          />
        </div>
      </form>
    </div>
  );
};

export default Download;
