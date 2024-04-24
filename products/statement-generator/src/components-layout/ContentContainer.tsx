import React, { forwardRef } from 'react';

import useUtilityStyles from 'styles/utilityStyles';

interface IContentContainer {
  children?: React.ReactNode;
  className?: string;
}

const ContentContainer = forwardRef<HTMLDivElement, IContentContainer>(
  ({ children, className = '' }, ref) => {
    const utilityClasses = useUtilityStyles();

    return (
      <div
        ref={ref}
        className={`${utilityClasses.contentContainer} ${className}`}
      >
        {children}
      </div>
    );
  }
);

export default ContentContainer;
