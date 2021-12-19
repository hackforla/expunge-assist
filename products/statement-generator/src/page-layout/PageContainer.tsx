import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';

interface IPageContainer {
  children?: any;
}

const PageContainer = ({ children }: IPageContainer) => {
  const utilityClasses = useUtilityStyles({
    pageTheme: 'transparent',
  });

  return <div className={utilityClasses.primaryContainer}>{children}</div>;
};

export default PageContainer;
