import s from './contacts-style.module.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../Components/form/Form';
import ContactsList from '../../Components/contacts-list/ContactList';
import Filter from '../../Components/filter/Filter';
import Loader from 'react-loader-spinner';
import { fetchContacts } from '../../redux/contacts-operations';
import { getLoading, getVisibleContacts } from '../../redux/contacts-selectors';

class ContactsView extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <div className={s.contactsBox}>
          {this.props.isLoadingcontacts && (
            <div className={s.loaderBox}>
              <Loader
                type="MutatingDots"
                color="#0b6470"
                secondaryColor="rgb(72, 163, 185)"
                height={100}
                width={100}
              />
            </div>
          )}
          <div className={s.formsBox}>
            <Form />

            <Filter />
          </div>

          <ContactsList />
          {/* <ContactsList /> */}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingcontacts: getLoading(state),
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
