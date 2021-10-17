import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navigation-style.module.css';

const AuthNav = () => (
  <>
    <div className={s.authorization}>
      <NavLink to="/register" exact className={s.registration}>
        Registration
      </NavLink>

      <NavLink to="/login" exact className={s.login}>
        Login
      </NavLink>
    </div>
  </>
);

export default AuthNav;
