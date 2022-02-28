import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';

interface IParagraph extends React.HTMLProps<HTMLParagraphElement> {
  disabled?: boolean;
  className?: string;
}

export default function Paragraph({
  disabled = false,
  children,
  className,
}: IParagraph) {
  const utilityClasses = useUtilityStyles();
  const isDisabled = disabled ? utilityClasses.disabledColor : '';

  return <p className={`${isDisabled} ${className}`}>{children}</p>;
}
