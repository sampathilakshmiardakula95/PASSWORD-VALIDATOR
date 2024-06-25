import {useState} from 'react'
import {
  PasswordAppContainer,
  ContentContainer,
  Heading,
  Paragraph,
  InputBox,
  ErrMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [isPasswordValid, setPassword] = useState(false)
  const [pwd, setPwdValue] = useState('')
  const checkPasswordValid = event => {
    setPwdValue(event.target.value)
    if (event.target.value.length >= 8) {
      setPassword(prev => !prev)
    }
  }
  return (
    <PasswordAppContainer>
      <ContentContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputBox type="password" value={pwd} onChange={checkPasswordValid} />
        {isPasswordValid ? (
          ''
        ) : (
          <ErrMsg>Your password must be at least 8 characters</ErrMsg>
        )}
      </ContentContainer>
    </PasswordAppContainer>
  )
}

export default PasswordValidator
