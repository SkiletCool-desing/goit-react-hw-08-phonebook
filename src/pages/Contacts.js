import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../redux/contact/operations';
import { ContactList } from '../components/ContactList/ContactList';
import { selectLoading } from '../redux/contact/selectors';
import { ContactsEditor } from 'components/ContactEditor/ContactEditor';
import { Filter } from '../components/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <p>Your contacts</p>
      <Filter/>
      <ContactsEditor/>
      <ContactList/>
      <div>{isLoading && 'Request in progress...'}</div>
    </>
  );
}