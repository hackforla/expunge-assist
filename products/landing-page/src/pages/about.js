import React, { useEffect } from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Profile from "../components/Profile"

import mission from "../assets/images/mission.png"
import history from "../assets/images/history.png"
import checkmark from "../assets/images/checkmark.png"
import Gretchen from "../assets/images/Gretchen.png"
import Apurva from "../assets/images/Apurva.png"
import Tierney from "../assets/images/Tierney.png"
import Andan from "../assets/images/Andan.png"
import Ryan from "../assets/images/Ryan1.png"
import NanaYaa from "../assets/images/NanaYaa.png"
import Brad from "../assets/images/Brad.png"
import "@fontsource/mulish"

const PageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  padding: 0;
  margin: 0;
`

const MissionContainer = styled.div`
  width: 100%;
  background-color: #fffaf2;
  height: 350px;
  display: flex;
`

const MissionTextContainer = styled.div`
  width: 50%;
  padding-left: 65px;
  margin-top: 20px;
`

const ImageContainer = styled.div`
  width: 40%;
`

const Heading = styled.h2`
  font-family: "mulish";
  font-size: 2em;
`

const MissionStatement = styled.p`
  font-family: "mulish";
  font-size: 1.4em;
  line-height: 1.4em;
  font-weight: 400;
  padding-right: 60px;
`

const Image = styled.img`
  height: 100%;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

const VolunteerButton = styled.button`
  background-color: #f8cd58;
  height: 51px;
  border-radius: 8px;
  padding: 12px 18px;
  letter-spacing: 2px;
  font-size: 16px;
  border: none;

  &:hover {
    cursor: pointer;
    border: none;
    background-color: dodgerblue;
    color: #fff;
  }
`

const PartnerButton = styled.button`
  background-color: #9903ff;
  border-radius: 8px;
  padding: 12px 18px;
  margin-left: 100px;
  color: #fff;
  font-size: 16px;
  font-family: "mulish";
  letter-spacing: 2px;
  line-height: 18px;

  &:hover {
    background-color: #c5b3d1;
    cursor: pointer;
    border: none;
    color: #000;
  }
`

const HistorySection = styled.div`
  width: 100%;
  background-color: #f9f1ff;
  height: 450px;
  display: flex;
`

const TextContainer = styled.div`
  width: 50%;
`

const AccomplishmentContainer = styled.div`
  width: 100%;
  background-color: #fffaf2;
  min-height: 400px;
`

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AccomplishedHeading = styled(Heading)`
  font-weight: bold;
`
const RowContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`

const CheckmarkContainer = styled.div`
  width: 30%;
`

const AccomplishedTextContainer = styled.div`
  width: 55%;
`

const Checkbox = styled(Image)`
  && {
    padding-left: 350px;
    height: 100px;
  }
`

const JoinContainer = styled.div`
  width: 100%;
  min-height: 400px;
  background-color: #fff;
`

const JoinHeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 50px;
`

const JoinHeading = styled(Heading)`
  && {
    color: #3b065a;
  }
`

const JoinTextContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`

const JoinStatement = styled.p`
  color: #222;
  font-size: 1.8em;
  font-family: "mulish";
  line-height: 50px;
  text-align: center;
  padding-bottom: 50px;
`

const TeamContainer = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: #fffaf2;
`

const TeamHeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 25px;
`

const TeamRowContainer = styled.div`
  width: 100%;
  padding-top: 30px;
  display: flex;
  justify-content: space-evenly;
`

const BradPhoto = styled.img`
  border-radius: 50%;
  height: 155px;
  width: 160px;
  margin-left: 40px;
`

const ProfileContainer = styled.div`
  width: 400px;
  padding-top: 20px;
`

const TeamMemberText = styled.p`
  font-size: 1.5em;
  font-family: "mulish";
`

export default function About() {
  useEffect(() => {
    document.title = "About Us"
  })
  return (
    <PageContainer>
      <Nav />

      <MissionContainer>
        <MissionTextContainer>
          <Heading>Our Mission</Heading>
          <MissionStatement>
            Expunge Assist (formerly known as the Record Clearance Project) is a
            project of Hack for LA. Expunge Assist helps people in California
            with criminal records accomplish record clearance, expungement or
            reduction as a result of Prop 47 & Prop 64.
          </MissionStatement>
          <ButtonContainer>
            <VolunteerButton>Volunteer With Us</VolunteerButton>
            <PartnerButton>Become a Partner</PartnerButton>
          </ButtonContainer>
        </MissionTextContainer>
        <ImageContainer>
          <Image src={mission} alt="success image" />
        </ImageContainer>
      </MissionContainer>

      <HistorySection>
        <ImageContainer>
          <Image src={history} alt="woman shouting into megaphone" />
        </ImageContainer>

        <TextContainer>
          <Heading>Our History</Heading>

          <MissionStatement>
            Record clearance or reduction in California is possible as a result
            of legislation which includes Prop 64 & Prop 47.
          </MissionStatement>

          <MissionStatement>
            Community organizers and non-profits are already working in this
            space to clear records for millions of eligible cases.
          </MissionStatement>
          <MissionStatement>
            New legislation under AB 1793 has initiated the process of
            automation for many of these records.
          </MissionStatement>

          <MissionStatement>
            Still, many Californians will still have to submit a petition to
            have their record cleared.
          </MissionStatement>
        </TextContainer>
      </HistorySection>
      <AccomplishmentContainer>
        <HeadingContainer>
          <AccomplishedHeading>
            What We've Accomplished So Far
          </AccomplishedHeading>
          <RowContainer>
            <CheckmarkContainer>
              <Checkbox src={checkmark} alt="Checkmark" />
            </CheckmarkContainer>
            <AccomplishedTextContainer>
              <MissionStatement>
                Record clearance or reduction in California is possible as a
                result of legislation which includes Prop 64 & Prop 47.
              </MissionStatement>
            </AccomplishedTextContainer>
          </RowContainer>
          <RowContainer>
            <CheckmarkContainer>
              <Checkbox src={checkmark} alt="Checkmark" />
            </CheckmarkContainer>
            <AccomplishedTextContainer>
              <MissionStatement>
                Record clearance or reduction in California is possible as a
                result of legislation which includes Prop 64 & Prop 47.
              </MissionStatement>
            </AccomplishedTextContainer>
          </RowContainer>
          <RowContainer>
            <CheckmarkContainer>
              <Checkbox src={checkmark} alt="Checkmark" />
            </CheckmarkContainer>
            <AccomplishedTextContainer>
              <MissionStatement>
                Record clearance or reduction in California is possible as a
                result of legislation which includes Prop 64 & Prop 47.
              </MissionStatement>
            </AccomplishedTextContainer>
          </RowContainer>
        </HeadingContainer>
      </AccomplishmentContainer>
      <JoinContainer>
        <JoinHeadingContainer>
          <JoinHeading>Join Our Mission</JoinHeading>
          <JoinTextContainer>
            <JoinStatement>
              Our goal is to create a tool that can be used by anyone creating
              personal statement generators for record clearance. Partner with
              us on our mission to help the 200,000+ residents of LA county who
              are eligible for record clearance and help provide a second chance
            </JoinStatement>
          </JoinTextContainer>
        </JoinHeadingContainer>
      </JoinContainer>
      <TeamContainer>
        <TeamHeadingContainer>
          <Heading>Meet the UX Design & Development Team</Heading>
        </TeamHeadingContainer>
        <TeamRowContainer>
          <Profile
            name="Gretchen Howard"
            title="Product Manager"
            image={Gretchen}
          />
          <Profile name="Apurva" title=" UX Research Lead" image={Apurva} />
          <Profile
            name="Tierney Sadowski"
            title="Product Manager"
            image={Tierney}
          />
        </TeamRowContainer>
        <TeamRowContainer>
          <Profile name="Andan Eddy" title="Product Manager" image={Andan} />
          <Profile name="Ryan Curtis" title="UX / UI Designer" image={Ryan} />
          <Profile
            name=" Nana Yaa Ansah"
            title="UX / UI Designer"
            image={NanaYaa}
          />
          <ProfileContainer>
            <BradPhoto src={Brad} alt="Brad" />
            <TeamMemberText>Brad Morgan</TeamMemberText>
            <TeamMemberText>Web Developer</TeamMemberText>
          </ProfileContainer>
        </TeamRowContainer>
      </TeamContainer>
      <Footer />
    </PageContainer>
  )
}
