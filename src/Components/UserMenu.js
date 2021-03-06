import React from 'react';
import { connect } from 'react-redux';
import { getUsername } from '../redux/auth/auth-selectors';
import { logOut } from '../redux/auth/auth-operations';
import s from './navigation-style.module.css';

const UserMenu = ({ name, onLogout }) => (
  <div>
    <span>Welcome, {name}</span>
    <button type="button" onClick={onLogout} className={s.btn}>
      LogOut
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: getUsername(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
