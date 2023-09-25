import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';

interface IContentContainer {
  children?: any;
  className?: string;
}

const FAQContainer = ({ children, className = '' }: IContentContainer) => {
  const utilityClasses = useUtilityStyles();

  return (
    <div className={`${utilityClasses.FAQContainer} ${className}`}>
      {children}
    </div>
  );
};

export default FAQContainer;
