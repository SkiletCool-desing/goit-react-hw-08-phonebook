import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterReducer';
export const Filter = () => {
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch(setFilter(event.target.value)); 
    }
  return (
    <label htmlFor="filter">
      <span>Find contacts by name</span>
      <input type="text" onChange={handleChange} />
    </label>
  );
};