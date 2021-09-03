import React, { useEffect } from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

import FAQImg from "../assets/images/FAQ.png"
import "@fontsource/mulish"
import ContactImg from "../assets/images/contact.png"

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const HelpSection = styled.div`
  width: 100%;
  min-height: 30%;
  background-color: #fffaf2;
  display: flex;
  margin: 0;
  height: 551px;
  margin-top: 10px;
  margin-bottom: 0;
`

const TextContainer = styled.div`
  width: 50%;
`

const FAQImageContainer = styled.div`
  width: 50%;
`

const Heading = styled.h2`
  font-family: "mulish";
  padding-left: 65px;
  font-size: 3em;
`

const SubHeading = styled.h3`
  font-family: "mulish";
  padding-left: 65px;
  font-size: 2em;
`

const FAQSText = styled.p`
  font-family: "mulish";
  padding-left: 65px;
  font-size: 2em;
  margin-top: 2em;
`

const QuestionSection = styled.div`
  width: 100%;
  min-height: 30%;
  height: 1050px;
  background-color: #e5e5e5;
  margin-top: 0;
  border: 1px solid #e5e5e5;
  margin-bottom: 30px;
`

const QAContainer = styled.div`
  width: 70%;
`

const QuestionText = styled.h4`
  font-family: "mulish";
  font-size: 1.7em;
  margin-bottom: 0;
  margin-left: 65px;
`

const AnswerText = styled.p`
  font-family: "mulish";
  margin-left: 65px;
  font-size: 1.1em;
  letter-spacing: 1px;
`

const CourtLink = styled.a`
  color: dodgerblue;
  text-decoration: none;

  &::visited {
    color: red;
  }
  &:hover {
    color: dodgerblue;
  }
`

const ContactUsContainer = styled.div`
  width: 95%;
  border: 8px solid rgba(245, 170, 4, 0.43);
  height: 500px;
  margin-bottom: 150px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const FormContainer = styled.div`
  width: 50%;
  margin-right: 10px;
  padding-right: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FormLayoutContainer = styled.div`
  display: flex;
  width: 100%;
`

const ImageContainer = styled.div`
  width: 50%;
  padding-top: 50px;
`

const Image = styled.img`
  width: 80%;
  height: 85%;
`

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 542px;
`

const Input = styled.input`
  border: none;
  background: #f4f5f4;
  height: 42px;
`

const Label = styled.label`
  font-size: 16px;
  line-height: 16px;
  color: #373f41;
  margin-bottom: 5px;
  font-family: "Mulish";
`

const ButtonContainer = styled.div`
  width: 70%;
  display: flex;
  margin-top: 20px;
  font-weight: 400;
`

const SubmitButton = styled.button`
  border: none;
  background-color: #9903ff;
  color: #fff;
  height: 38px;
  border-radius: 5px;
  width: 100%;
`

const StyledFooter = styled(Footer)`
  && {
    position: static;
  }
`

const Spacer = styled.div`
  width: 100%;
  height: 80px;
`

export default function FAQ() {
  useEffect(() => {
    document.title = "FAQs"
  })
  return (
    <PageContainer>
      <Nav />
      <HelpSection>
        <TextContainer>
          <Heading>Frequently Asked Questions:</Heading>
          <SubHeading>How can we help you?</SubHeading>

          <FAQSText>Below is a list of commonly asked questions.</FAQSText>
        </TextContainer>
        <FAQImageContainer>
          <Image src={FAQImg} alt="people asking questions" />
        </FAQImageContainer>
      </HelpSection>
      <QuestionSection>
        <QAContainer>
          <QuestionText>Q: Why do I need a personal statement?</QuestionText>
          <AnswerText>
            The personal statement is a brief essay about your current life
            situation. You can use it to tell the judge why you’re worthy of
            having your felony conviction reclassified as a misdemeanor under
            Prop 47. You can also use it for the same purpose to reclassify your
            marijuana felony conviction to a misdemeanor or have it completely
            expunged under Prop 64.
          </AnswerText>
        </QAContainer>
        <QAContainer>
          <QuestionText>
            Q: What type of convictions are eligible to be reclassified to a
            misdemeanor under Prop 47?
          </QuestionText>
          <AnswerText>
            Certain individuals with a low-level non-violent prior felony record
            or who are currently incarcerated may qualify to change their record
            or their sentence to a misdemeanor for the following offenses:
            simple drug possession, petty theft under $950, shoplifting under
            $950, forgery under $950, writting a bad check under $950 or receipt
            of stolen property under $950. However there are some very important
            exceptions and restrictions. Please visit{" "}
            <CourtLink href="https://www.courts.ca.gov/prop47.htm">
              courts.ca.gov/prop47.htm
            </CourtLink>{" "}
            for more information.
          </AnswerText>
        </QAContainer>
        <QAContainer>
          <QuestionText>
            Q: When do I need to file my Prop 47 application?
          </QuestionText>
          <AnswerText>
            You need to file your Prop 47 application by November 4, 2022.
            However, you can still file past that dateline if you have a valid
            excuse. Please visit{" "}
            <CourtLink href="https://www.courts.ca.gov/prop47.htm">
              courts.ca.gov/prop47.htm
            </CourtLink>
            for more information.
          </AnswerText>
        </QAContainer>
        <QAContainer>
          <QuestionText>
            Q: What type of marijuana convictions are eligible under Prop 64?
          </QuestionText>
          <AnswerText>
            There is a long list of mariruana offenses that can be reclassified
            or completely expunged under California’s Prop 64. It includes:
            Possession of one ounce or less of marijuana, possession of
            marijuana for sale. Please visit
            <CourtLink href="https://www.courts.ca.gov/prop64.htm">
              courts.ca.gov/prop64.htm
            </CourtLink>{" "}
            for a complete list and for more information.{" "}
          </AnswerText>
        </QAContainer>
        <QAContainer>
          <QuestionText>
            Q: When do I need to file my Prop 64 application?{" "}
          </QuestionText>
          <AnswerText>
            There is no deadline for filing a Prop 64 application. You may file
            any time.
          </AnswerText>
        </QAContainer>
        <QAContainer>
          <QuestionText>
            Q: Are there any helpful resources for getting my record cleared?{" "}
          </QuestionText>
          <AnswerText>
            There are a lot of organizations that help with record clearance.
            Here is a non-comprehensive list of organizations that provide
            support: NDICA, (list of orgs)
          </AnswerText>
        </QAContainer>
      </QuestionSection>
      <ContactUsContainer>
        <SubHeading>
          Didn’t find what you were looking for? &nbsp; &nbsp; Send us a
          message!
        </SubHeading>
        <FormLayoutContainer>
          <FormContainer>
            <form
              action="https://getform.io/f/c2344ce2-c2ca-4fce-ba76-1bdefd869586"
              method="POST"
            >
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
                  <Label htmlFor="question">Question</Label>
                  <Input name="question" />
                </InputFieldContainer>
                <ButtonContainer>
                  <SubmitButton type="submit">Send</SubmitButton>
                </ButtonContainer>
              </InputContainer>
            </form>
          </FormContainer>
          <ImageContainer>
            <Image src={ContactImg} alt="a man walking" />
          </ImageContainer>
        </FormLayoutContainer>
      </ContactUsContainer>
      <Spacer />
      <StyledFooter />
    </PageContainer>
  )
}
