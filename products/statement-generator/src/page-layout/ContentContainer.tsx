import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';

interface IContentContainer {
  children?: any;
  className?: string;
}

const ContentContainer = ({ children, className = '' }: IContentContainer) => {
  const utilityClasses = useUtilityStyles();

  return (
    <div className={`${utilityClasses.contentContainer} ${className}`}>
      {children}
    </div>
  );
};

export default ContentContainer;
