import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background: #f7ebff;
  color: black;
  height: 200px;
  h2 {
    margin: 0;
  }
  p {
    color: 3d0066;
    opacity: 30%;
  }
`;

interface Props {
  pageNumber: number;
}

const FormHeader: React.FC<Props> = ({ pageNumber }) => {
  let showFormHeader: boolean;
  let formStep: number;

  if (pageNumber === 3) {
    formStep = 1;
    showFormHeader = true;
  } else if (pageNumber === 5) {
    formStep = 2;
    showFormHeader = true;
  } else if (pageNumber === 7) {
    formStep = 3;
    showFormHeader = true;
  } else if (pageNumber === 9) {
    formStep = 4;
    showFormHeader = true;
  } else if (pageNumber === 11) {
    formStep = 5;
    showFormHeader = true;
  } else if (pageNumber === 13) {
    formStep = 6;
    showFormHeader = true;
  } else {
    formStep = 0;
    showFormHeader = false;
  }

  if (!showFormHeader) {
    return null;
  }

  return (
    <StyledContainer>
      {formStep === 1 && <h2>Introduce Yourself!</h2>}
      {formStep === 2 && <h2>Life Changes</h2>}
      {formStep === 3 && <h2>Involvement</h2>}
      {formStep === 4 && <h2>Goals</h2>}
      {formStep === 5 && <h2>Why</h2>}
      {formStep === 6 && <h2>My Personal Statement</h2>}

      {formStep < 6 && <p>Step {formStep} of 5</p>}
      {formStep === 6 && <p>Completed</p>}
    </StyledContainer>
  );
};

export default FormHeader;
