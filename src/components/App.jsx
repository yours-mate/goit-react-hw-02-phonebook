import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactsList } from "./ContactsList/ContactsList";

export class App extends Component {
  state = {
  contacts: [],
  name: ''
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const newContact = form.elements.name.value;
    this.setState(prevState => ({
      contacts: prevState.contacts.push(newContact),
      name: newContact,
    }));
    console.log(this.state);
  }
  
  render() {
    return (
       <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
        <ContactForm handleSubmit={this.handleSubmit} />
        <ContactsList/>
    </div>
    )
  }
}
