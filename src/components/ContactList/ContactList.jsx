import { useSelector } from 'react-redux';
import { Contacts } from '../Contacts/Contacts';
import { selectAllContacts, selectFilter } from '../../redux/contact/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  console.log(filter);

  const filteredContacts = () => {
  const normalizedContacts = filter.toLowerCase();
  return contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(normalizedContacts)
      )
};

  return (
    <ul className={css.list}>
      {filteredContacts().map(({ id, name, number }) => (
        <li key={id}>
          <Contacts id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
