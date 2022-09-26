import { useState } from 'react';
import { addItem } from 'redux/itemsSlice';
import { useDispatch, useSelector } from 'react-redux';
import s from './Form.module.css';
import { toast } from 'react-toastify';
const shortid = require('shortid');

const Form = () => {
  const [name, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);

  const handleChangeUser = ev => {
    const { name, value } = ev.target;

    switch (name) {
      case 'name':
        setUserName(value);
        // eslint-disable-next-line
        break;

      case 'number':
        setNumber(value);
        // eslint-disable-next-line
        break;

      default:
        return;
    }
  };

  const handleAddUser = e => {
    e.preventDefault();

    const hasUserContacts = contacts.some(user => user.name === name);

    if (hasUserContacts) {
      toast.error(`${name} is already in contacts`);
      return;
    }

    dispatch(addItem({ name, number, id: shortid.generate() }));
    setNumber('');
    setUserName('');
  };

  return (
    <form className={s.form} onSubmit={handleAddUser}>
      <label>
        <span className={s.label}>Name</span>
        <input
          className={s.input}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeUser}
        />
      </label>
      <label>
        <span className={s.label}>Tel</span>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeUser}
        />
      </label>

      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
