import { Container } from './styles'

export const Form = ({ handleSubmit, children }) => {
  return (
    <Container onSubmit={handleSubmit}>{children}</Container>
  )
}
