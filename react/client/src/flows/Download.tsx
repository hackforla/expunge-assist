import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import jsPDF from 'jspdf';

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
import Textarea from 'components/Textarea';

const useStyles = makeStyles(() =>
  createStyles({
    buttonLeft: {},
  })
);

interface IFinalizeStepProps {
  formState: IStepState;
}

const Download = ({ formState }: IFinalizeStepProps) => {
  const utilityClasses = useUtilityStyles();
  const classes = useStyles();

  // disable all buttons unless consent is checked
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClickCheck = (event: any) => {
    setIsDisabled(!event.target.checked);
  };

  // create a mailto link with the statement in the body

  const [email, setEmail] = useState();
  const [emailValid, setEmailValid] = useState(false);

  const validateEmail = (emailIn: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailIn).toLowerCase());
  };

  const handleChange = (event: any) => {
    setEmail(event.target.value);
    setEmailValid(validateEmail(event.target.value));
  };

  const str = `${generateIntroduction(formState)}
  ${generateInvolvementJob(formState)}
  ${generateInvolvementCommunity(formState)}
  ${generateInvolvementRecovery(formState)}
  ${generateInvolvementSchool(formState)}
  ${generateInvolvementParenting(formState)}
  ${generateInvolvementUnemployed(formState)} ${generateFutureGoals(formState)}
  ${generateWhy(formState)}`;

  const mailtoLink = `mailto:${email}?&subject=my%20personal%20statement&body=+${encodeURIComponent(
    str
  )}`;

  // expand email form
  const [expandEmail, setExpandEmail] = useState(false);

  const handleClickEmail = () => {
    setExpandEmail(!expandEmail);
  };

  // send email
  const handleClickEmailSend = () => {
    window.open(mailtoLink);
  };

  // copy to clipboard
  const handleClickClipboard = () => {
    navigator.clipboard.writeText(str);
  };

  // expand download
  const [expandDownload, setExpandDownload] = useState(false);

  const handleClickDownload = () => {
    setExpandDownload(!expandDownload);
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

  return (
    <div className={utilityClasses.contentContainer}>
      <form className={utilityClasses.flexGrow}>
        <Checkbox
          checked={!isDisabled}
          onChange={handleClickCheck}
          label="By checking this box you take full responsibility for this personal
            statement, and release all association with Hack for LA."
        />
        <Button
          className={classes.buttonLeft}
          onClick={handleClickEmail}
          disabled={isDisabled}
          buttonText="send in an email"
        />
        <Button
          className={classes.buttonLeft}
          onClick={handleClickClipboard}
          disabled={isDisabled}
          buttonText="copy to clipboard"
        />
        <Button
          className={classes.buttonLeft}
          onClick={handleClickDownload}
          disabled={isDisabled}
          buttonText="download"
        />

        {expandEmail && (
          <div className={utilityClasses.flexColumn}>
            Who would you like to email?
            <Textarea
              handleChange={handleChange}
              inputName="email"
              placeholder="someone@somewhere.com"
              multi={false}
              isValid={emailValid}
              defaultValue=""
            />
            <Button
              className={classes.buttonLeft}
              onClick={handleClickEmailSend}
              disabled={isDisabled || !emailValid}
              buttonText="send"
            />
          </div>
        )}

        {expandDownload && (
          <div className={utilityClasses.flexColumn}>
            <Button
              className={classes.buttonLeft}
              onClick={handleClickTXT}
              disabled={isDisabled}
              buttonText="TXT"
            />
            <Button
              className={classes.buttonLeft}
              onClick={handleClickPDF}
              disabled={isDisabled}
              buttonText="PDF"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default Download;
