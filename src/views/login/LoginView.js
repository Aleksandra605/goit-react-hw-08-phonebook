import { useState } from 'react';
import { logIn } from '../../redux/auth/auth-operations';
import { connect } from 'react-redux';
import s from '../auth-style.module.css';

function LoginView({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    onLogin({ email: email, password: password });

    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>E-mail</label>
      <input
        type="email"
        name="email"
        pattern=".+@mail\.com"
        required
        value={email}
        onChange={handleChange}
        className={s.input}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        required
        value={password}
        onChange={handleChange}
        className={s.input}
      />
      <button type="submit" className={s.btn}>
        Login
      </button>
    </form>
  );
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
