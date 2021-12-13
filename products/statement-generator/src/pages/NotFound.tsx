import React from 'react';
import { Link } from '@material-ui/core';

import useUtilityStyles from 'styles/utilityStyles';

export default function NotFound() {
  const utilityClasses = useUtilityStyles({
    pageTheme: 'dark',
  });

  return (
    <div className={utilityClasses.primaryContainer}>
      <div className={`${utilityClasses.contentContainer}`}>
        <div className={utilityClasses.flexGrow}>
          <h1>Oops!</h1>
          <p>
            Sorry, the page you are looking for does not exist. Try starting
            from our&nbsp;
            <Link color="textPrimary" href="/">
              homepage.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
