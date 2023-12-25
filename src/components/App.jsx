import { ContactList } from '../components/contactList/ContactList';
import { ContactForm } from '../components/contactForm/ContactForm';
import { Filter } from '../components/filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { Blocks } from 'react-loader-spinner';
import { addContact, removeContacts, fetchContacts, } from '../redux/operations';
import {handlFiltration} from '../redux/contactsReducer'
import { useEffect } from 'react';
import {
  selectContacts,
  selectContactsError,
  selectContactsFilter,
  selectContactsIsLoading,
} from '../redux/contact.selectors';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        />
      </Route>
    </Routes>
  );
};