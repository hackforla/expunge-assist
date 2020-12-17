// import React from 'react';
import styled from 'styled-components'

import device from 'styles/breakpoints'

const ContentContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  max-width: 850px;

  margin-left: auto;
  margin-right: auto;

  ${device.sm} {
    margin-left: initial;
    margin-right: initial;
  }
`

export default ContentContainer;
