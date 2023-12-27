import { useSelector } from 'react-redux';
import { Task } from '../Contacts/Contacts';
import { selectAllTasks } from '../../redux/contact/selectors';
import css from './ContactList.module.css';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);
console.log(tasks)
  return (
    <ul className={css.list}>
      {tasks.map(({ id, name, number }) => (
        <li key={id}>
          <Task id={id} text={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
