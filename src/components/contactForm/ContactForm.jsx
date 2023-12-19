import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../contactForm/ContactForm.module.css";
import { addContact } from '../../redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch(); 

  const contacts = useSelector((state) => state.contacts.contacts)

  const onInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  };

const onSubmit = (event) => {
  event.preventDefault();

  if (
    contacts &&
    contacts.some(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase()
    )
  ) {
    alert(`${name} вже є в контактах.`);
    return;
  }

  const contactData = {
    name,
    phone: number,
  };

  dispatch(addContact(contactData));
  setName("");
  setNumber("");
};

  return (
    <form onSubmit={onSubmit} className={css.contact_form}>
      <label htmlFor="name">
        <span className={css.input_names}> Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={name}
          onChange={onInputChange}
        />
      </label>
      <label htmlFor="number">
        <span className={css.input_names}>Phone number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
          value={number}
          onChange={onInputChange}
        />
      </label>
      <button type="submit" className={css.add_btn}>
        Add contact
      </button>
    </form>
  );
};
