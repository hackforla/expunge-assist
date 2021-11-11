import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles(() =>
  createStyles({
    paragraph: {
      marginTop: '1rem',
    },
  })
);

interface PrivacyPolicyProps {
  handleClick: () => void;
}

const PrivacyPolicy = ({ handleClick }: PrivacyPolicyProps) => {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles({
    pageTheme: 'dark',
  });

  return (
    <div className={utilityClasses.primaryContainer}>
      <div className={utilityClasses.contentContainer}>
        <h2>Privacy Policy</h2>

        <p className={classes.paragraph}>
          THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
          NON-INFRINGEMENT.
        </p>

        <p className={classes.paragraph}>
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>

        <p className={classes.paragraph}>
          ALL SESSION DATA IS KEPT PRIVATE AND PERSONAL INFORMATION IS
          CONFIDENTIAL.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
