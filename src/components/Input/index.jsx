import { Container } from './styles'

export const Input = ({ type = 'text', placeholder, text }) => {
  return (
    <Container type={type} placeholder={placeholder} value={text}/>
  )
}
