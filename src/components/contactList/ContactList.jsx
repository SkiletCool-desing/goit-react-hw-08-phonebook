import React from 'react';
import { useDispatch, useSelector } from "react-redux";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <span>{contact.name}</span>: <b>{contact.number}</b>{' '}
          <button type="button" onClick={() => null}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};
