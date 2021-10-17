import React from 'react';
import s from './navigation-style.module.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';

const Navigation = ({ isAuthenticated }) => (
  <nav className={s.nav}>
    <NavLink className={s.home} exact to="/">
      HOME
    </NavLink>

    {isAuthenticated && (
      <NavLink exact to="/contacts" className={s.phonebook}>
        Phonebook
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
