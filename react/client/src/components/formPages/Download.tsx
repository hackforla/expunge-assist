import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Download = ({ inputs, setInputs, goToPage }: StepProps) => {
  const savePDF = () => {
    html2canvas(
      document.getElementById('personalStatementElement') as HTMLElement
    ).then((canvas) => {
      const imgdata = canvas.toDataURL('image/png');
      const doc = new jsPDF();
      // @ts-ignore
      doc.addImage(imgdata, 'PNG', 10, 10);
      setInputs({ ...inputs, pdf: doc });
    });
  };

  const downloadPDF = () => {
    // @ts-ignore
    if (inputs.pdf) {
      // @ts-ignore
      inputs.pdf.save('PS.pdf');
    }
  };

  return <div className="Download" />;
};

export default Download;
