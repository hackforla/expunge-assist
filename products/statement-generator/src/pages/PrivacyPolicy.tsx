import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'components/Button';

import useUtilityStyles from 'styles/utilityStyles';

function PrivacyPolicy() {
  const utilityClasses = useUtilityStyles({
    pageTheme: 'dark',
  });
  const history = useHistory();

  return (
    <div className={utilityClasses.primaryContainer}>
      <div className={utilityClasses.contentContainer}>
        <h2>Privacy Policy</h2>

        <p>
          THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
          NON-INFRINGEMENT.
        </p>

        <p>
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>

        <p>
          ALL SESSION DATA IS KEPT PRIVATE AND PERSONAL INFORMATION IS
          CONFIDENTIAL.
        </p>

        <div className={utilityClasses.buttonContainerBuffer} />
        <div className={utilityClasses.buttonContainer}>
          <Button
            onClick={() => history.goBack()}
            buttonText="Back"
            theme="transparent"
          />
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
