import React from 'react';
import {useSelector } from "react-redux";

export const ContactList = ({onDelit }) => {
  const contacts = useSelector((state) => state.contacts.items);
  return (
    <ul>
      {contacts !== null &&
        contacts.map(({ id, name, phone }) => {
          return (
            <li key={id}>
              <span>{name}</span>: <b>{phone}</b>{' '}
              <button type="button" onClick={() => onDelit(id)}>
                Remove
              </button>
            </li>
          );
        })}
    </ul>
  );
};
