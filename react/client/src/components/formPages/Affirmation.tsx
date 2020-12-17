import React from 'react';

import Button from 'components/Button'

interface AffirmationProps {
  message: string;
  goToPage: (pageNumber: number) => void;
  pageNumber: number;
}

const Affirmation = ({ message, goToPage, pageNumber }: AffirmationProps) => {
  return (
    <div className="Affirmation">
      <h1 className='page-title'>{message}</h1>
      <Button
        type="button"
        onClick={() => {
          goToPage(pageNumber + 1);
        }}
      >
        NEXT
      </Button>
    </div>
  );
};

export default Affirmation;
