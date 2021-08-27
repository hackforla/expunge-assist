import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';

import useUtilityStyles from 'styles/utilityStyles';
import { IStepState } from 'contexts/FormStateProps';

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

interface IFinalizeStepProps {
  formState: IStepState;
}

const Download = ({ formState }: IFinalizeStepProps) => {
  const utilityClasses = useUtilityStyles();

  // disable all buttons unless consent is checked
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClickCheck = (event: any) => {
    setIsDisabled(!event.target.checked);
  };

  // create a mailto link with the statement in the body

  const [email, setEmail] = useState();
  const handleChange = (event: any) => setEmail(event.target.value);

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

  // mailto has to open in a new window, otherwise the user's work will be lost
  // typically, just need to add `target="_blank" rel="noopener noreferrer"`

  // FIREFOX ISSUE
  // `target = "_blank"` is broken on FF
  // you can trick FF by putting the mailto in an iframe
  // you can pass all the data into the iframe by appending a script
  // this useEffect creates a script in a text string and appends it to the body
  // the text string gets the iframe and writes in the mailto
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   const scriptText = document.createTextNode(
  //     `doc = document.getElementById('FileFrame').contentWindow.document; doc.open(); doc.write('<html><head><title></title></head><body><div><a href="${mailtoLink}" target="_blank" rel="noopener noreferrer">send your personal statement by email</a></div></body></html>'); doc.close();`
  //   );
  //   script.appendChild(scriptText);
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, [email]);

  // copy to clipboard
  const handleClickClipboard = () => navigator.clipboard.writeText(str);

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
    a.download = 'text-file.txt';

    const ev = new MouseEvent('click', {});
    a.dispatchEvent(ev);

    document.body.removeChild(div);
    window.URL.revokeObjectURL(url);
  };

  // download pdf
  const handleClickPDF = () => {
    const doc = new jsPDF('p', 'mm', 'letter');
    doc.setFontSize(12);
    const loremLines = doc.splitTextToSize(str, 170);
    doc.text(20, 50, loremLines);
    doc.save('MyPersonalStatement.pdf');
  };

  return (
    <div className={utilityClasses.contentContainer}>
      <div className="consent">
        <label htmlFor="consent">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            onClick={handleClickCheck}
          />
          By checking this box you take full responsibility for this personal
          statement, and release all association with Hack for LA.
        </label>
      </div>
      <div className="email">
        <h2>send your statement by email</h2>
        <div>
          who would you like to mail it to?
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="email address"
            disabled={isDisabled}
          />
        </div>
        <div>
          <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
            <button disabled={isDisabled}>send</button>
          </a>
        </div>
        {/* this iframe is only needed as a workaround for firefox. see discussion above */}
        {/* <iframe title="FF workaround" id="FileFrame" src="about:blank" /> */}
      </div>
      <div className="clipboard">
        <h2>copy your statement to the clipboard</h2>
        <button onClick={handleClickClipboard} disabled={isDisabled}>
          copy
        </button>
      </div>
      <div className="txt">
        <h2>download a txt</h2>
        <button onClick={handleClickTXT} disabled={isDisabled}>
          download
        </button>
      </div>
      <div className="pdf">
        <h2>download a pdf</h2>
        <button onClick={handleClickPDF} disabled={isDisabled}>
          download
        </button>
      </div>
    </div>
  );
};

export default Download;
