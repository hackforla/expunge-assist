import React, { useEffect } from "react"
import styled from "styled-components"
import "@fontsource/mulish"
import ContactImg from "../assets/images/contact.png"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const ContactContainer = styled.div`
  width: 100%;
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: none;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.5em;
`

const Headings = styled.h2`
  font-family: "Mulish";
  color: #373f41;
  text-align: center;
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
`

const ImageContainer = styled.div`
  width: 50%;
  padding-top: 70px;
`
const FormContainer = styled.div`
  width: 50%;
  margin-right: 10px;
  padding-right: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Image = styled.img`
  width: 70%;
  height: 80%;
  padding-left: 150px;
`

const RadioButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-left: 125px;
  margin-bottom: 10px;
`
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  border: none;
  background: #f4f5f4;
  height: 42px;
  width: 447px;
`

const Label = styled.label`
  font-size: 16px;
  line-height: 16px;
  color: #373f41;
  margin-bottom: 5px;
  font-family: "Mulish";
`

const Textarea = styled.textarea`
  background: #f4f5f4;
  height: 122px;
  width: 447px;
  border: none;
`

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const RadioInputContainer = styled.div`
  display: flex;
  margin-right: 30px;
`

const ButtonContainer = styled.div`
  width: 70%;
  display: flex;
  margin-top: 20px;
  padding-left: 43px;
  font-weight: 400;
`

const SubmitButton = styled.button`
  border: none;
  background-color: #9903ff;
  color: #fff;
  height: 38px;
  border-radius: 5px;
  width: 130px;
`

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us"
  })
  return (
    <ContactContainer>
      <Nav />
      <HeaderContainer>
        <Headings>
          Interested in what we're doing ? <br />
          Send us an email at <b>info@expungeassist.org</b>
        </Headings>
      </HeaderContainer>
      <ContentContainer>
        <ImageContainer>
          <Image src={ContactImg} alt=" man" />
        </ImageContainer>
        <FormContainer>
          <form
            action="https://getform.io/f/c2344ce2-c2ca-4fce-ba76-1bdefd869586"
            method="POST"
          >
            <RadioButtonContainer>
              <RadioInputContainer>
                <input type="radio" name="Interested in Partnership" />
                <Label htmlFor="Interested in Partnership">
                  Interested in Partnership?
                </Label>
              </RadioInputContainer>
              <RadioInputContainer>
                <input type="radio" name="Interested in Volunteering" />
                <Label htmlFor="Interested in Volunteering">
                  Interested in Volunteering?
                </Label>
              </RadioInputContainer>
            </RadioButtonContainer>
            <InputContainer>
              <InputFieldContainer>
                <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" />
              </InputFieldContainer>
              <InputFieldContainer>
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" />
              </InputFieldContainer>
              <InputFieldContainer>
                <Label htmlFor="message">Message</Label>
                <Textarea name="message" />
              </InputFieldContainer>
              <ButtonContainer>
                <SubmitButton type="submit">Send</SubmitButton>
              </ButtonContainer>
            </InputContainer>
          </form>
        </FormContainer>
      </ContentContainer>
      <Footer />
    </ContactContainer>
  )
}
