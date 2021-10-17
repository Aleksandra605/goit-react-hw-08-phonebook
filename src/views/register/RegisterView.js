import { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import s from '../auth-style.module.css';

function RegisterView({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);

      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onRegister({ name: name, email: email, password: password });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        onChange={handleChange}
        className={s.input}
      />
      <label>E-mail</label>
      <input
        type="email"
        name="email"
        // pattern=".+@globex\.com"
        // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={email}
        onChange={handleChange}
        className={s.input}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={password}
        onChange={handleChange}
        className={s.input}
      />
      <button type="submit" className={s.btn}>
        Register
      </button>
    </form>
  );
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
