import styled from 'styled-components'

export const PasswordAppContainer = styled.div`
  background-color: #24263c;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContentContainer = styled.div`
  background-color: #383a4e;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px 1px #434451;
  border-radius: 12px;
  padding: 50px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 50px;
  font-weight: 400;
  font-family: 'Roboto';
`

export const Paragraph = styled.p`
  color: #f8fafc;
  font-size: 18px;
  font-family: 'Roboto';
  margin-top: -10px;
  margin-bottom: 50px;
`

export const InputBox = styled.input`
  height: 45px;
  width: 400px;
  background-color: #ffffff;
  border: 0px;
  outline: none;
`
export const ErrMsg = styled.p`
  color: #ef4444;
  font-size: 14px;
  margin-bottom: 50px;
`
