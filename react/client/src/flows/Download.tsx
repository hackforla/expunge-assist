import React from 'react';
import jsPDF from 'jspdf';

const Download = ({ inputs, goBackPage }: StepProps) => {
  const savePDF = () => {
    const doc = new jsPDF('p', 'mm', 'letter');
    doc.setFontSize(12);
    const loremLines = doc.splitTextToSize(lorem, 170);
    doc.text(20, 50, loremLines);
    doc.save('MyPersonalStatement.pdf');

    // Open PDF in a new tab (untested on mobile)
    // pdf.output('dataurlnewwindow');
  };

  const lorem = `October 26th, 2020\n\nTo Whom It May Concern,\n\nThank you so much for taking the time to read my personal statement. My name is Jenna Smith, and I am 27 years old.\n\nSince my conviction, I have been working at United Federal Credit Union as a Security Guard. At this job, I have had the opportunity to assist in day to day operations and ensure the safety of valued customers. This is important to me because I like making people feel safe.\n\nI have also been really involved in community service. In particular, I've been working with Pauly's Project. I lead the outreach team and distribute food to unhoused neighbors throughout the LA area. It's important to me because I wantt hese members of our community to feel valued and loved.\n\nI am working towards going back to school, so that I can be a social worker. To work towards my goals; I have been taking night classes at Rosedale Community Center, and I have been shadowing a social worker on Fridays. Having my record cleared would help me acheive these goals for my future.\n\nI want to clear my record because I am a different person from who I was when I was convicted. I want to make the world a better place. Right now having a criminal record is preventing me from being accepting to college, and it has hindered my career. Getting my record cleared will have a major impact on my life.\n\nSincerely,\n\nJenna Smith
    `;

  return (
    <div className="Download">
      <p>Previewing Final Statement</p>
      <button onClick={savePDF}>Save PDF</button>
      <button onClick={() => goBackPage()}>BACK</button>
    </div>
  );
};

export default Download;
