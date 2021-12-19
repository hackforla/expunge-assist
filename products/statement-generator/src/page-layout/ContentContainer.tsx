import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';

interface IContentContainer {
  children?: any;
}

const ContentContainer = ({ children }: IContentContainer) => {
  const utilityClasses = useUtilityStyles();

  return <div className={utilityClasses.contentContainer}>{children}</div>;
};

export default ContentContainer;
