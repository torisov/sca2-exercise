import styled from "styled-components"
import { Flex } from "@rebass/grid"

// TODO: Container
export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
`

// TODO: FormContainer
export const FormContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
`

// TODO: Button
export const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: white;
  font-size: 16px;
  border: 2px solid turquoise;
  border-radius: 4px;
  color: turquoise;
`
