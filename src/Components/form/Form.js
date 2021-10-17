import { useState } from 'react';
// import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './form-styles.module.css';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts-operations';
import { getAllContacts } from '../../redux/contacts-selectors';

function Form({ contacts, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeName = event => {
    setName(event.target.value);
  };

  const changeNumber = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = { name: name, number: number };
    if (contacts.find(contact => contact.name === name)) {
      return alert(`This person ${name} is already in contacts`);
    }
    onSubmit(data);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>Name</label>
      <input
        className={s.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        onChange={changeName}
      />
      <label className={s.label}>Number</label>
      <input
        className={s.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={number}
        onChange={changeNumber}
      />
      <button type="submit" className={s.btn}>
        Add to contacts
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => {
    return dispatch(addContact(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

// const mapDispatchToProps = dispatch => {
//   return {
//     toAddContact: data => dispatch(addContact(data)),
//   };
// };

// export default connect(null, mapDispatchToProps)(Form);
