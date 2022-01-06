import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';

interface IAppSubheader {
  children?: any;
  className?: string;
}

const AppSubheader = (props: IAppSubheader) => {
  const { children, className } = props;
  const utilityClasses = useUtilityStyles();
  console.log('AppSubheader', props);

  return <div>subheader</div>;
};

export default AppSubheader;
