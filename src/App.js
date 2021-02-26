import { React, Component } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { fetchContacts } from 'redux/phonebook/phonebookOperations';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <div className="phoneBook">
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="Title"
            unmountOnExit
          >
            <h1>Контакты</h1>
          </CSSTransition>

          <Form />

          <CSSTransition
            in={this.props.contacts.length > 1}
            timeout={250}
            classNames="Filter"
            unmountOnExit
          >
            <Filter />
          </CSSTransition>

          <ContactsList />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.phonebook.contacts,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
