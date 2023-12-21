import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://654441d75a0b4b04436c358f.mockapi.io',
});

export const setToken = token => {
  contactsInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const reqestRegister = async formData => {
  const { data } = await contactsInstance.post('/users/signup', formData);
  setToken(data.token);
  return data;
};

export const reqestLogIn = async formData => {
  const { data } = await contactsInstance.post('/users/login', formData);
  setToken(data.token);
  return data;
};

export const reqestLogOut = async () => {
  const { data } = await contactsInstance.post('/users/logout');
  return data;
};

export const reqestRefresh = async () => {
  const { data } = await contactsInstance.get('/users/current');
  return data;
};

export const reqestAllContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};

export const reqestAddContact = async contact => {
  const { data } = await contactsInstance.post('/contacts', contact);
  return data;
};

export const reqestDeleteContact = async contactId => {
  const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
  return data;
};
