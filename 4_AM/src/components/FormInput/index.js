import React from "react"
import { Input, Label } from "./styles"

// TODO: Create a FormInput component that used the styled component Input
// and whatever extra labels or text-based components and containers you wish!
const FormInput = ({ label, update }) => (
  <div>
    <Label> {label} </Label>
    <Input onChange={update} />
  </div>
)

export default FormInput
