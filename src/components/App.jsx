import { ContactList } from '../components/contactList/ContactList';
import { ContactForm } from '../components/contactForm/ContactForm';
import { Filter } from '../components/filter/Filter';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   addContact,
//   removeContacts,
//   handlFiltration,
// } from '../redux/contactsReducer';

export function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts</h2>
      <Filter  />
      <ContactList />
    </div>
  );
}