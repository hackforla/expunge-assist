import React, { useEffect } from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

import laptop from "../assets/images/laptop.png"
import step1 from "../assets/images/step1.png"
import step2 from "../assets/images/step2.png"
import step3 from "../assets/images/step3.png"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`

const GreetingContainer = styled.div`
  width: 100%;
  background-color: #fffaf2;
  height: 600px;
  display: flex;
`

const GreetingTextContainer = styled.div`
  width: 50%;
  padding-top: 30px;
`

const GreetingImageContainer = styled.div`
  width: 50%;
`

const GreetingHeader = styled.div`
  font-family: "mulish";
  font-size: 2.2em;
  padding-left: 40px;
  font-weight: 800;
  line-height: 45px;
  letter-spacing: 1px;
  margin-top: 50px;
`
const PurpleText = styled.span`
  font-family: "mulish";
  font-size: 1.5em;
  color: #9903ff;
`

const BoldHeaderContainer = styled.div`
  width: 60%;
  padding-left: 50px;
`

const GreetingImage = styled.img`
  width: 90%;
  height: 90%;
`

const GreetingDescriptionContainer = styled.div`
  padding: 10px 0 40px 40px;
`

const GreetingDescriptionText = styled.p`
  font-size: 1.2em;
  font-weight: normal;
  line-height: 40px;
  letter-spacing: 0.8px;
  font-family: "mulish";
  margin-left: 50px;
`

const PartnersContainer = styled.div`
  width: 100%;
  min-height: 600px;
  background-color: #fff;
`

const DemoButton = styled.button`
  width: 144px;
  height: 42px;
  background-color: #9903ff;
  color: #fff;
  border-radius: 8px;
  font-size: 16px;
  letter-spacing: 1px;
  border: none;
  margin-left: 50px;
`

const PartnersFormSection = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
`

const PartnerFormContainer = styled.div`
  width: 60%;
`

const PartnerForm = styled.div`
  height: 375px;
  width: 700px;
  border-radius: 8px;
  margin-left: 150px;
  margin-top: 30px;
  border: 8px solid rgba(245, 179, 4, 0.66);
  background-color: #fffaf2;
  font-size: 1.6em;
  padding-bottom: 10px;
`

const HeadingContainer = styled.div`
  width: 50%;
  margin-left: 100px;
`

const PartnerFormHeading = styled.h2`
  font-family: "mulish";
`

const WhyPartnersContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
`

const PartnerMissionContainer = styled.div`
  width: 100%;
  height: 480px;
  position: relative;
`

const PurpledLetters = styled.span`
  color: #9903ff;
`

const PartnerFormText = styled.p`
  font-family: "mulish";
  margin-left: 100px;
`

const PartnerTextAction = styled.span`
  font-size: 0.8em;
  margin-left: 50px;
`

const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
`

const Input = styled.input`
  border: 2px solid #000;
  background: #fff;
  height: 42px;
  width: 447px;
  border-radius: 8px;
`

const Label = styled.label`
  font-size: 16px;
  line-height: 16px;
  color: #373f41;
  margin-bottom: 5px;
  font-family: "Mulish";
`

const SubmitButton = styled.button`
  border: none;
  border-radius: 8px;
  background-color: #9903ff;
  width: 152px;
  height: 47px;
  color: #fff;
  font-size: 0.8em;
`

const HorizontalPurpleBand = styled.div`
  width: 100%;
  background-color: rgba(153, 3, 255, 0.5);
  height: 34px;
  margin-top: 240px;
`

const VerticalYellowBand = styled.div`
  width: 34px;
  background-color: rgba(248, 203, 85, 0.66);
  height: 500px;
  position: absolute;
  left: 1000px;
`

const WhyPartnerFieldContainer = styled.div`
  width: 50%;
`

const WhyPartnerField = styled.div`
  border: 8px solid rgba(153, 3, 255, 0.5);
  height: 384px;
  background-color: #fffaf2;
  border-radius: 8px;
  width: 700px;
  font-size: 1.6em;
`

const PartnerHeaderContainer = styled.div`
  width: 100%;
  margin-left: 80px;
  margin-right: 30px;
`

const HeadOverTextContainer = styled.div`
  width: 90%;
  font-family: "mulish";
  padding-left: 50px;
  font-size: 0.9em;
`

const HorizontalYellowBand = styled.div`
  width: 50%;
  background-color: rgba(248, 203, 85, 0.66);
  height: 34px;
  margin-top: 240px;
`

const VerticalPurpleBand = styled.div`
  width: 34px;
  background-color: rgba(153, 3, 255, 0.5);
  height: 470px;
  position: absolute;
  left: 440px;
  top: 1093px;
`

const MissionCard = styled.div`
  width: 600px;
  height: 335px;
  border: 8px solid rgba(153, 3, 255, 0.5);
  border-radius: 8px;
  margin-left: 120px;
  background-color: #fffaf2;
  z-index: 4;
  position: absolute;
`

const OurMissionTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-size: 1.6em;
`

const OurMissionText = styled.h2`
  color: #9903ff;
  font-family: "mulish";
  margin-left: 50px;
`

const MissionDescription = styled.p`
  font-family: "mulish";
  font-size: 1.3em;
  letter-spacing: 1px;
  line-height: 40px;
  margin-left: 50px;
  margin-right: 50px;
`

const LightPurpleBand = styled.div`
  width: 100%;
  background-color: #f9f1ff;
  height: 300px;
  position: relative;
  bottom: -160px;
  z-index: 2;
`

const HowItWorksSection = styled.div`
  width: 100%;
  height: 600px;
  background-color: #fff;
`

const HowItWorksHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 1.6em;
`

const HowItWorksHeader = styled.h2`
  font-family: "Mulish";
`

const StepsThumbnailsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Thumbnail = styled.img`
  width: 255px;
  height: 210px;
  border-radius: 3px;
`

const StepNumText = styled.p`
  font-size: 1.2em;
  font-family: "mulish";
  font-weight: bold;
  margin-bottom: 0;
`
const StepDirections = styled.p`
  font-family: "mulish";
  margin-top: 3px;
`

const handleDemoClick = () => {
  console.log("moving stuff", window)
  return (window.location.href = "https://expungeassist.org")
}

export default function Home() {
  useEffect(() => {
    document.title = `Expunge Assist Homepage`
  })
  return (
    <AppContainer>
      <Nav />
      <GreetingContainer>
        <GreetingTextContainer>
          <GreetingHeader>
            <BoldHeaderContainer>
              <PurpleText>Expunge Assist</PurpleText>
              &nbsp; accelerates the
              <PurpleText> Record Clearance </PurpleText>
              process by helping you generate a personal statement.
            </BoldHeaderContainer>
          </GreetingHeader>
          <GreetingDescriptionContainer>
            <GreetingDescriptionText>
              While still under development, Expunge Assist will aim to help
              people in California with criminal records accomplish record
              clearance, expungement or reduction.
            </GreetingDescriptionText>
            <DemoButton onClick={() => handleDemoClick()}>View Demo</DemoButton>
          </GreetingDescriptionContainer>
        </GreetingTextContainer>
        <GreetingImageContainer>
          <GreetingImage src={laptop} alt="" />
        </GreetingImageContainer>
      </GreetingContainer>
      <PartnersContainer>
        <PartnersFormSection>
          <PartnerFormContainer>
            <PartnerForm>
              <HeadingContainer>
                <PartnerFormHeading>
                  We're looking for <PurpledLetters>Partners</PurpledLetters> to
                  help!
                </PartnerFormHeading>
              </HeadingContainer>
              <PartnerFormText>Lorem Ipsum</PartnerFormText>
              <PartnerFormText>Ipsum Lorem</PartnerFormText>
              <PartnerTextAction>
                Sign up for more info about becoming a partner and for project
                updates.
              </PartnerTextAction>
              <Form action="#" method="POST">
                <Label htmlFor="signup"></Label>
                <Input
                  placeholder="yourname@domain.com"
                  name="signup"
                  type="email"
                ></Input>
                <SubmitButton>Register</SubmitButton>
              </Form>
            </PartnerForm>
          </PartnerFormContainer>
          <HorizontalPurpleBand />
          <VerticalYellowBand />
        </PartnersFormSection>
        <WhyPartnersContainer>
          <VerticalPurpleBand />
          <HorizontalYellowBand />

          <WhyPartnerFieldContainer>
            <WhyPartnerField>
              <PartnerHeaderContainer>
                <PartnerFormHeading>
                  Why <PurpledLetters>Partner</PurpledLetters> with us?
                </PartnerFormHeading>
              </PartnerHeaderContainer>
              <PartnerFormText>Lorem Ipsum</PartnerFormText>
              <PartnerFormText>Lorem Ipsum</PartnerFormText>
              <PartnerFormText>Lorem Ipsum</PartnerFormText>
              <HeadOverTextContainer>
                Head over to our{" "}
                <a href="/about">
                  <b>About</b>
                </a>{" "}
                page to find out more about our goal to help improve the record
                clearance process.
              </HeadOverTextContainer>
            </WhyPartnerField>
          </WhyPartnerFieldContainer>
        </WhyPartnersContainer>
        <PartnerMissionContainer>
          <MissionCard>
            <OurMissionTextContainer>
              <OurMissionText>Our Mission</OurMissionText>
            </OurMissionTextContainer>
            <MissionDescription>
              Our mission is to help the 200,000+ residents of LA county who are
              eligible for record clearance and help provide a{" "}
              <b>second chance.</b>
            </MissionDescription>
          </MissionCard>
          <LightPurpleBand />
        </PartnerMissionContainer>
      </PartnersContainer>

      <HowItWorksSection>
        <HowItWorksHeaderContainer>
          <HowItWorksHeader>
            How <span style={{ color: "#9903ff" }}>Expunge Assist</span> Works
          </HowItWorksHeader>
        </HowItWorksHeaderContainer>

        <StepsThumbnailsContainer>
          <ThumbnailContainer>
            <Thumbnail src={step1} alt="" />
            <StepNumText>Step 1 </StepNumText>
            <StepDirections>
              Head to <a href="https://expungeassist.org">expungeassist.org</a>
            </StepDirections>
          </ThumbnailContainer>
          <ThumbnailContainer>
            <Thumbnail src={step2} alt="" />
            <StepNumText>Step 2</StepNumText>
            <StepDirections>Fill out the prompts</StepDirections>
          </ThumbnailContainer>
          <ThumbnailContainer>
            <Thumbnail src={step3} alt="" />
            <StepNumText>Step 3</StepNumText>
            <StepDirections>Generate a personal statement</StepDirections>
          </ThumbnailContainer>
        </StepsThumbnailsContainer>
      </HowItWorksSection>
      <Footer />
    </AppContainer>
  )
}
