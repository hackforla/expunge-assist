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

const PageStyled = styled.div<StyleProps>`
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
  let pageNumber: number = Number(match.params.page);
  let background: string;
  if (isNaN(pageNumber)) pageNumber = 0;

  const goToPage = (pageNumber: number) => {
    history.push(`/form/${pageNumber}`)
  }

  pageNumber === 0 ? background='#9903ff' : background='white';

  return (
    <PageStyled background={background} className='page-container'>
      <Header pageNumber={pageNumber} />

      { pageNumber !== 0 &&
        <FormHeader pageNumber={pageNumber} />
      }

      <div>
        { pageNumber === 0 ? <Landing goToPage={goToPage}/>
         :
        <Form pageNumber={pageNumber} goToPage={goToPage} /> }
      </div>
    </PageStyled>
  )
}

export default PageContainer;
