import React, { Component } from "react";
import { nanoid } from 'nanoid';
import css from 'components/Contacts/Contacts.module.css';
// import Filter from "../Filter/Filter";

class ContactsList extends Component {
  state = {
    // Исходное состояние компонента, включая начальные контакты и фильтр
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '', // Инициализируем состояние для фильтрации контактов
    name: '', // Имя нового контакта
    number: '', // Номер нового контакта
  };

  inputId = nanoid(); // Генерируем уникальный идентификатор для инпута. Это может быть полезно, если у вас есть несколько полей ввода на странице и вы хотите, чтобы каждое поле имело свой уникальный идентификатор.

  // Обработчик изменения значений в инпутах
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }



  // Обработчик добавления нового контакта
addContact = (contact) => {
  const { name, number } = contact;

  if (name.trim() === '' || number.trim() === '') {
    alert('Имя и номер контакта не могут быть пустыми.');
        console.log(name)
    return;
  }

  this.setState(prevState => ({
    contacts: [...prevState.contacts, { ...contact, id: nanoid() }],

  }));

};

  // Обработчик удаления контакта по ID
  handleDeleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
<div className={css.contactsContainer}>
  <ul className={css.contactsList}>
    {this.state.contacts
      // Фильтруем контакты по имени с учетом фильтра (приводим к нижнему регистру)
      .filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
      .map(contact => (
        <li key={contact.id} className={css.item}>
          {/* Отображаем имя и номер контакта */}
          {contact.name}: {contact.number}

          {/* Кнопка "Удалить" с вызовом handleDeleteContact по клику */}
          <button onClick={() => this.handleDeleteContact(contact.id)} className={css.deleteButton}>
            Delete
          </button>
        </li>
      ))}
  </ul>
</div>
    );
  }
}

export default ContactsList;