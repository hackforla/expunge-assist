import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .centered {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 528px;
    height: 266px;
    margin: 0 auto;
  }

  h3 {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.3rem;
    letter-spacing: 0.0015em;
    margin-bottom: 1em;
  }

  .content {
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.2rem;
    letter-spacing: 0.005em;
    margin-bottom: 1em;
  }
`;

export const Button = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.2rem;
  text-align: left;

  letter-spacing: 0.0125em;
  text-transform: uppercase;

  color: #ffffff;
  background-color: transparent;
  border: none;
`;
