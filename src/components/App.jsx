import React, { Component } from "react";
import ContactForm from "./Form/Form";
import ContactList from  "./Contacts/ContactsList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

addContact = (contact) => {
  const { name } = contact;
  if (this.isNameInContacts(name)) {
    alert(`Контакт с именем ${name} уже существует!`);
  } else {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  }
};

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        
        <h2>Contacts</h2>
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDeleteContact={this.handleDeleteContact} 
          
/>      </div>
    );
  }
}

export default App;
