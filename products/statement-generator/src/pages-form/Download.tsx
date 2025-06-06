import React, { useRef, useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph } from 'docx';
import jsPDF from 'jspdf';
import { makeStyles, createStyles } from '@material-ui/core';
import {
  GetAppRounded,
  EmailRounded,
  FileCopyRounded,
} from '@material-ui/icons';

import { generateFinal } from 'helpers/previewHelper';

import FormStateContext from 'contexts/FormStateContext';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';

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
        width: 225,
        '& svg': {
          marginRight: '1rem',
        },
      },
    },
  })
);

interface IDownload {
  onDownloadAgreementCheck: (isChecked: boolean) => void;
}

export default function Download({ onDownloadAgreementCheck }: IDownload) {
  const { t } = useTranslation();
  const classes = useStyles();
  const { formState } = useContext(FormStateContext);

  // disable all buttons unless consent is checked
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClickCheck = (event: any) => {
    setIsDisabled(!event.target.checked);
    onDownloadAgreementCheck(event.target.checked);
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

  // implemented with https://docx.js.org/#/?id=welcome
  const handleClickDOCX = async () => {
    const fileName = 'MyPersonalStatement.docx';

    if (typeof finalStatement !== 'string') {
      return;
    }

    const textSections = finalStatement
      .split(/[\r\n]+/)
      .filter((line) => line.trim() !== '');

    if (!textSections.length) {
      return;
    }

    const docxSections = textSections.map(
      (sectionText) =>
        new Paragraph({
          text: sectionText,
          spacing: {
            after: 360, // 360 TWIPs = 24px
          },
        })
    );

    const doc = new Document({
      sections: [
        {
          children: docxSections,
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, fileName);
    });
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

    const marginLeft = 20;
    const marginTop = 30;
    const marginBottom = 30;
    const maxWidth = 170;
    const lineHeight = 6;
    const pageHeight = doc.internal.pageSize.height;

    let y = marginTop;

    const lines = doc.splitTextToSize(finalStatement, maxWidth);

    // account for spillover onto multiple pages
    lines.forEach((line: string) => {
      if (y + lineHeight > pageHeight - marginBottom) {
        doc.addPage();
        y = 30;
      }
      doc.text(marginLeft, y, line);
      y += lineHeight;
    });

    doc.save('MyPersonalStatement.pdf');
  };

  const contentContainerRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    contentContainerRef.current?.focus();
  }, []);

  return (
    <form ref={contentContainerRef} tabIndex={-1}>
      <Checkbox
        checked={!isDisabled}
        onChange={handleClickCheck}
        label={t('download_page.agreement_checkbox_label')}
      />
      <div className={classes.downloadButtonsContainer}>
        <Button
          className={classes.buttonSpacing}
          onClick={handleClickDOCX}
          disabled={isDisabled}
          icon={<GetAppRounded />}
          buttonText={t('download_page.docx_btn')}
        />
        <Button
          className={classes.buttonSpacing}
          onClick={handleClickPDF}
          disabled={isDisabled}
          icon={<GetAppRounded />}
          buttonText={t('download_page.pdf_btn')}
        />
        <Button
          className={classes.buttonSpacing}
          onClick={handleClickTXT}
          disabled={isDisabled}
          icon={<GetAppRounded />}
          buttonText={t('download_page.txt_btn')}
        />
        <Button
          className={classes.buttonSpacing}
          onClick={handleClickEmail}
          disabled={isDisabled}
          icon={<EmailRounded />}
          buttonText={t('download_page.email_btn')}
        />
        <Button
          className={classes.buttonSpacing}
          onClick={handleClickClipboard}
          disabled={isDisabled}
          icon={<FileCopyRounded />}
          buttonText={t('download_page.clipboard_btn')}
        />
      </div>
    </form>
  );
}
