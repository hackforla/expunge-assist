import React from 'react';

import Button from 'components/Button'

interface AffirmationProps {
  message: string;
  goToPage: (pageNumber: number) => void;
  pageNumber: number;
}

const Affirmation: React.FC<AffirmationProps> = ({ message, goToPage, pageNumber }) => {
  return (
    <div className="Affirmation">
      <h1 className='page-title'>{message}</h1>
      <Button onClick={() => {goToPage(pageNumber+1)}}>NEXT</Button>
    </div>
  )
}

export default Affirmation;
