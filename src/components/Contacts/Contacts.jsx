import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/contact/operations';
import css from './Contacts.module.css';

export const Task = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{name}</p>
      <p className={css.text}>{number}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
