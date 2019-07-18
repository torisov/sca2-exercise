import React, { Component } from "react"
import Welcome from "../../components/Welcome"
import FormInput from "../../components/FormInput"
import { Container, Button, FormContainer } from "./styles"

class Form extends Component {
  // TODO: Add constructor and establish state with all the fields you want
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      isSubmitted: false
    }
  }

  // TODO: Create update methods for state after creating the form structure
  updateName = event => {
    this.setState({ name: event.target.value })
  }

  render() {
    // TODO: Currently, this only renders the welcome component. Create a form, and various form components and place them here
    return (
      <Container>
        <Welcome name="amigo" />
        <FormContainer>
          <FormInput label="name" update={this.updateName} />
        </FormContainer>
        <Button onClick={() => this.setState({ isSubmitted: true })}>
          Submit
        </Button>
        {this.state.isSubmitted && <div>{this.state.name}</div>}
      </Container>
    )
  }
}

export default Form
