import { X } from 'phosphor-react'
import { Container } from './styles'

export const Modal = ({ handleModal, children }) => {
  return (
    <Container>
      <X onClick={handleModal}/>

      {children}
    </Container>
  )
}
