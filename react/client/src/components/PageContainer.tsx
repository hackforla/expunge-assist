import React from 'react';
import styled from 'styled-components'

import Header from 'components/Header'
import Form from 'components/Form'
import FormHeader from 'components/FormHeader'
import Landing from 'components/pages/Landing'

// import device from 'styles/breakpoints'

interface StyleProps {
  background?: string;
}

const StyledContainer = styled.div<StyleProps>`
  background: ${props => props.background};
  color:white;
  padding: 18px;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`

interface PageProps {
  history: {
    location: {
      pathname: string
    },
    push: (address: string) => void
  },
  match: {
    params: {
      page: string
    }
  }
};

const PageContainer: React.FC<PageProps> = ({ history, match }) => {
  const pageNumber: number = Number(match.params.page) || 0;
  const isLandingPage = pageNumber === 0;

  const goToPage = (pageNumber: number) => {
    history.push(`/form/${pageNumber}`)
  }

  const background = isLandingPage ? '#9903ff' : 'white';

  return (
    <StyledContainer background={background} className='page-container'>
      <Header pageNumber={pageNumber} />

      { !isLandingPage &&
        <FormHeader pageNumber={pageNumber} />
      }

      { isLandingPage &&
        <Landing goToPage={goToPage}/>
      }

      { !isLandingPage &&
        <Form pageNumber={pageNumber} goToPage={goToPage} />
      }
    </StyledContainer>
  )
}

export default PageContainer;
