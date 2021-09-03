import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../assets/images/logo.png"

const NavContainer = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
  margin-top: 15px;
  background-color: #fffffc;
`

const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
`

const LinksContainer = styled.div`
  width: 50%;
  display: flex;
  padding-top: 10px;
`

const StyledLink = styled(Link)`
  &&&& {
    margin: 0 10px;
    text-decoration: none;
  }
`

const Image = styled.img`
  width: 50%;
`

export default function Nav() {
  return (
    <NavContainer>
      <LogoContainer>
        <Image src={Logo} alt="expunge-assist logo" />
      </LogoContainer>
      <LinksContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/faq">FAQ</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </LinksContainer>
    </NavContainer>
  )
}
