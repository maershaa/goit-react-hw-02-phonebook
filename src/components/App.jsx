import React, { Component } from "react";
import ContactForm from "./Form/Form"; // Импортируем компонент формы для добавления контактов
import ContactList from  "./Contacts/ContactsList"; // Импортируем компонент списка контактов
import Filter from "./Filter/Filter";

class App extends Component {
state = {
  contacts: [],
  filter: ''
}

isNameInContacts = (name) => {
  const { contacts } = this.state;
  return contacts && contacts.length > 0 && contacts.some((contact) => contact.name === name);
}


  // Метод для добавления нового контакта
  addContact = (contact) => {
    const { name } = contact;
    // Проверяем, существует ли контакт с таким именем
     if (this.isNameInContacts(name)) {
      alert(`Контакт с именем ${name} уже существует!`);
    } else {
      // Если контакта с таким именем нет, добавляем его в состояние
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };



    // Метод для получения отфильтрованного массива контактов
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };


  // Обработчик изменения значения фильтра
  handleFilterChange = (filter) => {
    this.setState({ filter });
    console.log(filter)
  }
  render() {

        const filteredContacts = this.getFilteredContacts(); // Получаем отфильтрованный массив контактов

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} /> {/* Рендерим форму для добавления контактов и передаем метод addContact как обработчик */}
        
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />

      <ContactList
          contacts={filteredContacts} // Передаем отфильтрованный массив контактов
          filter={this.state.filter}
        />
      </div>
    );
  }
}

export default App;
