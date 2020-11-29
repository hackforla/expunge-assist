import React from 'react';

import Header from '../Header'
import { Button, Wrapper } from '../../styles/PrivacyPolicy';

interface PrivacyPolicyProps {
  handleClick: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ handleClick }) => {
  return(
    <Wrapper>
      <Header pageNumber={0} />
      <div className="centered">
        &nbsp;
        <h3>Privacy Policy</h3>
        &nbsp;
        <p>THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.</p> 
        <p>IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
        &nbsp;
        <p>ALL SESSION DATA IS KEPT PRIVATE AND PERSONAL INFORMATION IS CONFIDENTIAL.</p> 
        &nbsp;
        <Button onClick={handleClick}>
          <span>BACK</span>
        </Button>
      </div>
    </Wrapper>
  )
}

export default PrivacyPolicy;