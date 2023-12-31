import { useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contact/operations';
import css from './ContactEditor.module.css';

export const ContactsEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const text = form.elements.text.value;
    const number = form.elements.number.value;
    
    if (text !== '' || number !== "") {
      dispatch(addContacts({ name:text, number}));
      form.reset();
      return;
    }
    alert('Contacts cannot be empty. Enter some text!');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="text" className={css.input} />
      <input name="number" className={css.input} />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};
