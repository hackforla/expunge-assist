import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';

interface IPageContainer {
  children?: any;
  className?: string;
}

const PageContainer = ({ children, className }: IPageContainer) => {
  const utilityClasses = useUtilityStyles({
    pageTheme: 'transparent',
  });

  return (
    <div className={`${utilityClasses.primaryContainer} ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
