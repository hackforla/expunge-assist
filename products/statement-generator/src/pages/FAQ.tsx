import React, { useEffect } from 'react';

const FAQ: React.FC = () => {
  useEffect(() => {
    document.title = 'FAQs';
  });
  return <div className="FAQ">FAQ page</div>;
};

export default FAQ;
