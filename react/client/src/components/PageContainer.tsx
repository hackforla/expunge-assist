import React from 'react';
import styled from 'styled-components';

import AffirmationComponent from 'components/AffirmationComponent';
import Header from 'components/Header';
import Form from 'components/Form';
import FormHeader from 'components/FormHeader';
import Landing from 'components/pages/Landing';

// import device from 'styles/breakpoints'

interface StyleProps {
  theme?: string;
  background?: string;
}

const basicStyles = `
  background: white;
  color: #131313;
`;

const purpleStyles = `
  background: #9903ff;
  color: white;
`;

const StyledContainer = styled.div<StyleProps>`
  background: ${(props) => props.background};
  color: white;
  padding: 18px;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;

  ${(props) => {
    switch (props.theme) {
      case 'purple':
        return purpleStyles;

      case 'basic':
      default:
        return basicStyles;
    }
  }}
`;

interface PageProps {
  history: {
    location: {
      pathname: string;
    };
    push: (address: string) => void;
  };
  match: {
    params: {
      page: string;
    };
  };
}

const PageContainer: React.FC<PageProps> = ({ history, match }) => {
  const pageNumber: number = Number(match.params.page) || 0;
  const isLandingPage = pageNumber === 0;

  const [isAffirmationActive, setAffirmationActive] = React.useState(true);

  const goToPage = (nextPage: number) => {
    history.push(`/form/${nextPage}`);
  };

  return (
    <StyledContainer
      theme={isLandingPage ? 'purple' : 'basic'}
      className="page-container"
    >
      <AffirmationComponent
        buttonText="Begin"
        description="This is a tool to generate a personal statement."
        isActive={isAffirmationActive}
        onClickAffirmation={setAffirmationActive}
      />

      <Header pageNumber={pageNumber} />

      {!isLandingPage && <FormHeader pageNumber={pageNumber} />}

      {isLandingPage && <Landing goToPage={goToPage} />}

      {!isLandingPage && <Form pageNumber={pageNumber} goToPage={goToPage} />}
    </StyledContainer>
  );
};

export default PageContainer;
