import React from "react"
import styled from "styled-components"
import FooterLogo from "../assets/images/footer-logo.png"
import { Link } from "gatsby"

const FooterContainer = styled.div`
  width: 100%;
  /* position: absolute; */
  bottom: 0;
  display: flex;
  background-color: #efd8ff;
  height: 70px;
  margin-top: 20px;
  padding: 0;
`

const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  padding-left: 30px;
`

const LinksContainer = styled.div`
  width: 50%;
  display: flex;
  padding-top: 1.6em;
`

const Image = styled.img`
  width: 50%;
  margin-top: 5px;
`

const StyledLink = styled(Link)`
  &&&& {
    margin: 0 10px;
    text-decoration: none;
  }
`

export default function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <Image src={FooterLogo} alt="logo" />
      </LogoContainer>
      <LinksContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/faq">FAQ</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </LinksContainer>
    </FooterContainer>
  )
}
