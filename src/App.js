import { React, Component } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import { connect } from 'react-redux';
import { fetchContacts } from 'redux/phonebook/phonebookOperations';
import Title from 'components/Title/Title';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <div className="phoneBook">
          <Title />

          <Form />

          <Filter />

          <ContactsList />
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
