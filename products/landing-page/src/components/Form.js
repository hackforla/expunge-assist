import React from "react"
import styled from "styled-components"

export const FormContainer = styled.div`
  width: 50%;
  margin-right: 10px;
  padding-right: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function ContactForm() {
  return (
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
  )
}
