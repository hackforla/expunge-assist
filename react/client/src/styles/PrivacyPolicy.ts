import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #FFFFFF;
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
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.0015em;
    margin-bottom: 1em;
  }

  p {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.005em;
    margin-bottom: 1em;
  }
`

export const Button = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: left;

  letter-spacing: 0.0125em;
  text-transform: uppercase;

  color: #FFFFFF;
  background-color: transparent;
  border: none;
`
