import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from '../redux/operations';
import { ContactList } from '../components/ContactList/ContactList';
import { selectLoading } from '../redux/contact/selectors';
export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactList/>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}