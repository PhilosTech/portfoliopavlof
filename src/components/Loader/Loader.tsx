import React from 'react'
import Atom from "../../assets/atom.svg"
import { Container } from "./styles"

interface Props {
  isLoading: boolean
} 
export default function Loader({ isLoading }: Props) {
  return (
    <Container isLoading={isLoading} >
      <img src={Atom} alt="Atom" />
    </Container>
  )
}
