import { useSelector } from 'react-redux';
import { Contacts } from '../Contacts/Contacts';
import { selectAllContacts } from '../../redux/contact/selectors';
import css from './ContactList.module.css';

export const contactsList = () => {
  const contacts = useSelector(selectAllContacts);
console.log(contacts)
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contacts id={id} text={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
