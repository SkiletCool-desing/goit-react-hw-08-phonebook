import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { contactsEditor } from '../components/ContactEditor/ContactEditor';
import { ContactList } from '../components/ContactList/ContactList';
import { selectLoading } from '../redux/contact/selectors';
export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    // dispatch(fetchContactsEditor());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <contactsEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}