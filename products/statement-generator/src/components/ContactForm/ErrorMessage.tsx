import React from 'react';
import { FormHelperText } from '@material-ui/core';

export type ErrMsgProps = {
  errorMessage: string | undefined;
  classError: string;
};

const ErrorMessage: React.FC<ErrMsgProps> = ({ errorMessage, classError }) => {
  const mergedClass = `${classError} ${errorMessage}`;

  return errorMessage ? (
    <FormHelperText className={mergedClass} error>
      {errorMessage}
    </FormHelperText>
  ) : null;
};

export default ErrorMessage;
