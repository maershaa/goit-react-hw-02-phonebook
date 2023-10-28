import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm"; // Импортируем компонент формы для добавления контактов
import ContactList from  "./Contacts/ContactsList"; // Импортируем компонент списка контактов
import Filter from "./Filter/Filter";
import css from './App.module.css';


class App extends Component {
state = {
  contacts: [],
  filter: ''
}

  addContact = newContact => {

    const normalizeName = newContact.name.toLowerCase();// приводимо ім'я до нижнього регістру
    const checkName = this.state.contacts.find(contact => {
     return contact.name.toLowerCase() === normalizeName
    });// перевіряємо ім'я, чи є  в контактах

      console.log(newContact)
  
    this.setState(pervState => {
          if (checkName) { 
            alert(`${newContact.name} is alredy in contacts`)// якщо є викидаємо помилку
      return
    }
      return {
        contacts: [...pervState.contacts, newContact],// якщо немає, додаємо до масиву новий контакт
      
      };


    }
    );
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
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
         {/* Рендерим форму для добавления контактов и передаем метод addContact как обработчик */}
        
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
