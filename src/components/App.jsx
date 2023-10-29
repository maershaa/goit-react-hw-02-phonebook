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
  // Приводимо имя нового контакта к нижнему регистру
  const normalizeName = newContact.name.toLowerCase();

  // Проверяем, существует ли контакт с таким же именем (нормализованным) среди текущих контактов
  const isDuplicate = this.state.contacts.some(
    contact => contact.name.toLowerCase() === normalizeName
  );

  // Если контакт уже существует, выводим сообщение и завершаем выполнение функции
  if (isDuplicate) {
    alert(`${newContact.name} уже есть в контактах`);
    return;
  }

  // Если контакт не является дубликатом, обновляем состояние, добавляя новый контакт в массив контактов
  this.setState(prevState => ({
    contacts: [...prevState.contacts, newContact],
  }));
};

// Метод для удаления контакта по его ID
deleteContact = (contactId) => {
  this.setState(prevState => ({
    // Обновляем состояние, фильтруя контакты и оставляя только те, у которых ID не совпадает с заданным contactId
    contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  }));
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
            onDeleteContact={this.deleteContact} 
        />
      </div>
    );
  }
}

export default App;
