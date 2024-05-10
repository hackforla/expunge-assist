import React, { forwardRef } from 'react';

import useUtilityStyles from 'styles/utilityStyles';

interface IContentContainer {
  children?: React.ReactNode;
  className?: string;
  tabIndex?: number;
}

const ContentContainer = forwardRef<HTMLDivElement, IContentContainer>(
  ({ children, className = '', tabIndex }, ref) => {
    const utilityClasses = useUtilityStyles();

    return (
      <div
        ref={ref}
        className={`${utilityClasses.contentContainer} ${className}`}
        tabIndex={tabIndex}
      >
        {children}
      </div>
    );
  }
);

export default ContentContainer;
