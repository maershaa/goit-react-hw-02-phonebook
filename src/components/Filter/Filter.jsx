import React from "react";
import css from "../Contacts/Contacts.module.css"; 

const Filter = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    onChange={(e) => onChange(e.target.value)} // Вызов функции onChange при изменении значения
    placeholder="Filter by name"
    className={css.inputText}
  />
);


export default Filter;
