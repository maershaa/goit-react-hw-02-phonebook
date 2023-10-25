import React, { Component } from "react";
import ContactForm from "./Form/Form"; // Импортируем компонент формы для добавления контактов
import ContactList from  "./Contacts/ContactsList"; // Импортируем компонент списка контактов

class App extends Component {
  state = {
    contacts: [], // Массив контактов
    filter: "", // Строка для фильтрации контактов
  };

  isNameInContacts = (name) => {
    return this.state.contacts.some((contact) => contact.name === name);
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

  // Метод для обновления фильтрации контактов
  handleFilterChange = (filter) => {
    this.setState({ filter });
  };



  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} /> {/* Рендерим форму для добавления контактов и передаем метод addContact как обработчик */}
        
        <h2>Contacts</h2>
        <ContactList
          contacts={this.state.contacts} // Передаем массив контактов
          filter={this.state.filter} // Передаем строку для фильтрации
          onDeleteContact={this.handleDeleteContact} // Передаем метод для удаления контакта
        />
      </div>
    );
  }
}

export default App;
