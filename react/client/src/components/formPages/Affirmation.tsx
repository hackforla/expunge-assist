import React from 'react';

interface AffirmationProps {
  message: string;
  goToPage: (pageNumber: number) => void;
  pageNumber: number;
}

const Affirmation = ({ message, goToPage, pageNumber }: AffirmationProps) => {
  return (
    <div className="Affirmation">
      <h1>{message}</h1>
      <button
        type="button"
        onClick={() => {
          goToPage(pageNumber + 1);
        }}
      >
        NEXT
      </button>
    </div>
  );
};

export default Affirmation;
