import React from 'react';
import { FormHelperText } from '@material-ui/core';

export type ErrMsgProps = {
  errorMessage: string | undefined;
  classError: string;
  classShowError: string;
};

const ErrorMessage: React.FC<ErrMsgProps> = ({
  errorMessage,
  classError,
  classShowError,
}) => {
  const mergedClass = `${classError} ${errorMessage ? classShowError : ''}`;

  return (
    <FormHelperText className={mergedClass} aria-live="polite">
      {errorMessage || ' '}
    </FormHelperText>
  );
};

export default ErrorMessage;
