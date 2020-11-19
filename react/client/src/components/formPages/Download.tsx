import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import { Wrapper } from '../../styles/Download';

const Download: React.FC<StepProps> = ({ inputs, setInputs }) => {
  const savePDF = () => {
    html2canvas(document.getElementById('personalStatementElement') as HTMLElement )
      .then((canvas) => {
        const imgdata = canvas.toDataURL('image/png');
        const doc = new jsPDF('p', 'mm');
        //@ts-ignore
        doc.addImage(imgdata, 'PNG', 10, 10);
        setInputs({ ...inputs, pdf: doc})
    });
  }

  const downloadPDF = () => {
    //@ts-ignore
    if (inputs.pdf) {
      //@ts-ignore
      inputs.pdf.save("PS.pdf");
    }
  }

  return (
    <div className='Download'>
      <p>Previewing Final Statement</p>
      <Wrapper id="personalStatementElement">
        <p>This is the personal statement in PDF form</p>
        <p>Testing 1 2 3</p>
      </Wrapper>
      <button onClick={savePDF}>Save PDF</button>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  )
}

export default Download;