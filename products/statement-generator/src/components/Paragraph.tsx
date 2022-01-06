import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';

interface IParagraph extends React.HTMLProps<HTMLParagraphElement> {
  disabled?: boolean;
}

export default function Paragraph({ disabled = false, children }: IParagraph) {
  const utilityClasses = useUtilityStyles();

  return (
    <p className={disabled ? utilityClasses.disabledColor : ''}>{children}</p>
  );
}
