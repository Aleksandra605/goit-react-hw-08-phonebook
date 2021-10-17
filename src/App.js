import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import AppBar from './Components/AppBar';
import { getCurrentUser } from './redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import s from './App.css';
import Loader from 'react-loader-spinner';

const Register = lazy(() => import('./views/register/RegisterView'));
const Login = lazy(() => import('./views/login/LoginView'));
const ContactsView = lazy(() => import('./views/contacts/ContactsView'));

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense
          fallback={
            <div className={s.loaderBox}>
              <Loader
                type="MutatingDots"
                color="#0b6470"
                secondaryColor="rgb(72, 163, 185)"
                height={100}
                width={100}
              />
            </div>
          }
        >
          <Switch>
            {/* <PublicRoute exact path="/" component={HomeView} /> */}
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={Register}
              exact
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={Login}
              exact
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsView}
              exact
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

App.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

const mapDispatchToProps = {
  onGetCurretnUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
