import React, { Component } from "react";
//import { nanoid } from 'nanoid';
import ContactList from "./components/ContactList";
import contacts from "./contacts.json";

class App extends Component {

  state = {
    contacts: contacts ,
    filter: '',
    name: '',
    number: ''
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm  /> */}

      <h2>Contacts</h2>
      {/* <Filter  /> */}
        <ContactList contacts={contacts} onDeleteContact={ this.deleteContact}/>
    </div>
  );
  }
  
};

export default App;


// model.id = nanoid()