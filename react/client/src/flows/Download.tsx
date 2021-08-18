// original PDF version

// import React from 'react';
// import jsPDF from 'jspdf';

// const Download = () => {
//   const savePDF = () => {
//     const doc = new jsPDF('p', 'mm', 'letter');
//     doc.setFontSize(12);
//     const loremLines = doc.splitTextToSize(lorem, 170);
//     doc.text(20, 50, loremLines);
//     doc.save('MyPersonalStatement.pdf');

//     // Open PDF in a new tab (untested on mobile)
//     // pdf.output('dataurlnewwindow');
//   };

//   const lorem = `October 26th, 2020\n\nTo Whom It May Concern,\n\nThank you so much for taking the time to read my personal statement. My name is Jenna Smith, and I am 27 years old.\n\nSince my conviction, I have been working at United Federal Credit Union as a Security Guard. At this job, I have had the opportunity to assist in day to day operations and ensure the safety of valued customers. This is important to me because I like making people feel safe.\n\nI have also been really involved in community service. In particular, I've been working with Pauly's Project. I lead the outreach team and distribute food to unhoused neighbors throughout the LA area. It's important to me because I wantt hese members of our community to feel valued and loved.\n\nI am working towards going back to school, so that I can be a social worker. To work towards my goals; I have been taking night classes at Rosedale Community Center, and I have been shadowing a social worker on Fridays. Having my record cleared would help me acheive these goals for my future.\n\nI want to clear my record because I am a different person from who I was when I was convicted. I want to make the world a better place. Right now having a criminal record is preventing me from being accepting to college, and it has hindered my career. Getting my record cleared will have a major impact on my life.\n\nSincerely,\n\nJenna Smith
//     `;

//   return (
//     <div className="Download">
//       <p>Previewing Final Statement</p>
//       <button onClick={savePDF}>Save PDF</button>
//       <button onClick={() => {}}>BACK</button>
//     </div>
//   );
// };

// export default Download;

//
// pdf version above
//
// mailto version below
//

import React, { useState, useEffect } from 'react';
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
  const [email, setEmail] = useState('send to');
  const handleChange = (event: any) => setEmail(event.target.value);

  useEffect(() => {
    const script = document.createElement('script');

    // const scriptText = document.createTextNode(
    //   `const doc = document.getElementById('FileFrame').contentWindow.document; doc.open(); doc.write('<html><head><title></title></head><body><div><a href="mailto:${email}?cc=fake@email.com&subject=Expunge%20Assist%20personal%20statement&body=+${encodeURIComponent(
    //     str
    //   )}"></body></html>'); doc.close();`
    // );

    // const scriptText = document.createTextNode(
    //   `const doc = document.getElementById('FileFrame').contentWindow.document; doc.open(); doc.write('<html><head><title></title></head><body><div><a href="https://greenwold.com">yo</a></div></body></html>'); doc.close();`
    // );

    const scriptText = document.createTextNode(
      `doc = document.getElementById('FileFrame').contentWindow.document; doc.open(); doc.write('<html><head><title></title></head><body><div><a href="mailto:${email}?cc=fake@email.com&subject=Expunge%20Assist%20personal%20statement&body=+${encodeURIComponent(
        str
      )}" target="_blank" rel="noopener noreferrer">Send your personal statement by email ... iframe with target blank in a tag params</a></div></body></html>'); doc.close();`
    );

    script.appendChild(scriptText);

    // script.src = 'https://use.typekit.net/foobar.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [email]);

  const utilityClasses = useUtilityStyles();
  const str = `${generateIntroduction(formState)}
  ${generateInvolvementJob(formState)}
  ${generateInvolvementCommunity(formState)}
  ${generateInvolvementRecovery(formState)}
  ${generateInvolvementSchool(formState)}
  ${generateInvolvementParenting(formState)}
  ${generateInvolvementUnemployed(formState)} ${generateFutureGoals(formState)}
  ${generateWhy(formState)}`;

  const test = 'yoyoyo';

  return (
    <div className={utilityClasses.contentContainer}>
      <div>
        who would you like to mail it to?
        <input type="email" value={email} onChange={handleChange} />
      </div>
      <div>the links below use the email entered above</div>
      <div className="Download">
        {/* the `a` tag below was reviewed by daniel and it's basically ok. just needs to open in a new tab */}
        <div>
          <a
            href={`mailto:${email}?cc=fake@email.com&subject=Expunge%20Assist%20personal%20statement&body=+${encodeURIComponent(
              str
            )}`}
          >
            Send your personal statement by email ... orig
          </a>
        </div>
        {/* TODO: make the page look right. add an input field to get 'to' email address. make the `a` tag open in a new tab */}
        {/* PROBLEM: target="_blank" doesn't seem to work with mailto links. but mailto links are 'smart' in the sense that they will open in the system preference, ie app or web email.  */}
        <div>
          <a
            href="mailto:someone@yoursite.com"
            target="_blank"
            rel="noopener noreferrer"
            // rel="noreferrer"
          >
            Send your personal statement by email ... simple email with target
            blank
          </a>
        </div>
        <div>
          {' '}
          <a
            href={`mailto:${email}?cc=fake@email.com&target=_blank&subject=Expunge%20Assist%20personal%20statement&body=${encodeURIComponent(
              str
            )}`}
          >
            Send your personal statement by email ... big email with target
            blank in url params
          </a>
        </div>
        <div>
          {' '}
          <a
            href={`mailto:${email}?cc=fake@email.com&subject=Expunge%20Assist%20personal%20statement&body=${encodeURIComponent(
              str
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Send your personal statement by email ... big email with target
            blank in a tag params
          </a>
        </div>
        <iframe title="yoyoyo" id="FileFrame" src="about:blank" />
      </div>
    </div>
  );
};

export default Download;
