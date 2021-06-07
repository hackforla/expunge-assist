import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import Header from 'components/Header';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '18px',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& .centered': {
        display: 'flex',
        flexDirection: 'column',
        justifyCOntent: 'flex-start',
        width: '528px',
        height: '266px',
        margin: '0 auto',
      },
      '& h3': {
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: '1.3rem',
        letterSpacing: '0.0015em',
        marginBottom: '1em',
      },
      '& .content': {
        fontWeight: 'bold',
        fontSize: '1rem',
        lineHeight: '1.2rem',
        letterSpacing: '0.005em',
        marginBottom: '1em',
      },
    },
    button: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '1rem',
      lineHeight: '1.2rem',
      textAlign: 'left',

      letterSpacing: '0.0125em',
      textTransform: 'uppercase',

      color: '#ffffff',
      backgroundColor: 'transparent',
      border: 'none',
    },
  })
);

interface PrivacyPolicyProps {
  handleClick: () => void;
}

const PrivacyPolicy = ({ handleClick }: PrivacyPolicyProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="centered">
        &nbsp;
        <h3>Privacy Policy</h3>
        &nbsp;
        <p className="content">
          THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
          NON-INFRINGEMENT.
        </p>
        <p className="content">
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
        &nbsp;
        <p className="content">
          ALL SESSION DATA IS KEPT PRIVATE AND PERSONAL INFORMATION IS
          CONFIDENTIAL.
        </p>
        &nbsp;
        <button className={classes.button} onClick={handleClick}>
          <span>BACK</span>
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
