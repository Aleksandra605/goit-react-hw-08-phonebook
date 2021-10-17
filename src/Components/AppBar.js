import React from 'react';
import s from './navigation-style.module.css';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';

const MenuBar = ({ isAuthenticated }) => (
  <header className={s.appBar}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(MenuBar);
