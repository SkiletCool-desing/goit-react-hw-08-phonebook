import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { selectAllTasks } from '../../redux/tasks/selectors';
import css from './TaskList.module.css';

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
