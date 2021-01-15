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

interface AffirmationProps {
  isActive: boolean;
  buttonText: string;
  description: string;
}

const PageContainer: React.FC<PageProps> = ({ history, match }) => {
  const pageNumber: number = Number(match.params.page) || 0;
  const isLandingPage = pageNumber === 0;

  // create state just for the Affirmation component
  const [
    affirmationData,
    setAffirmationData,
  ] = React.useState<AffirmationProps>({
    isActive: true,
    buttonText: 'Begin',
    description: 'This is a tool to generate a personal statement.',
  });

  const updateAffirmationData = (newState: object) => {
    setAffirmationData({ ...affirmationData, ...newState });
  };

  const goToPage = (nextPage: number) => {
    history.push(`/form/${nextPage}`);
  };

  return (
    <StyledContainer
      theme={isLandingPage ? 'purple' : 'basic'}
      className="page-container"
    >
      <AffirmationComponent
        buttonText={affirmationData.buttonText}
        description={affirmationData.description}
        isActive={affirmationData.isActive}
        onChangeAffirmation={updateAffirmationData}
      />

      <Header pageNumber={pageNumber} />

      {!isLandingPage && <FormHeader pageNumber={pageNumber} />}

      {isLandingPage && <Landing goToPage={goToPage} />}

      {!isLandingPage && (
        <Form
          pageNumber={pageNumber}
          goToPage={goToPage}
          // onChangeAffirmation={updateAffirmationData}
        />
      )}
    </StyledContainer>
  );
};

export default PageContainer;
