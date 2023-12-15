import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../contactForm/ContactForm.module.css";
import { nanoid } from "nanoid";

const addContact = (contactData) => ({
  type: "ADD_CONTACT",
  payload: contactData,
});

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch(); 

  const contacts = useSelector((state) => state.contacts.contacts)
  // const value = useSelector(state => state.some.value);

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
    const contactData = {
      name,
      number,
      id: nanoid(),
    };

    if (
      contacts.some(
        (contact) =>
          contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} вже є в контактах.`);
      return;
    }

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
