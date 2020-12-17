import React from 'react';

interface AffirmationProps {
  message: string;
  goToPage: (pageNumber: number) => void;
  pageNumber: number;
}

const Affirmation: React.FC<AffirmationProps> = ({ message, goToPage, pageNumber }) => {
  return (
    <div className="Affirmation">
      <h1 className='page-title'>{message}</h1>
      <button onClick={() => {goToPage(pageNumber+1)}}>NEXT</button>
    </div>
  )
}

export default Affirmation;
