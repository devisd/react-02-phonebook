import { Component } from 'react';
import Form from './components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const newName = this.state.contacts.map(el => el.name.toLowerCase());
    if (newName.includes(data.name.toLowerCase())) {
      return alert(`${data.name} is already in contacts`);
    }
    const input = { id: nanoid(3), name: data.name, number: data.number };
    this.setState({ contacts: [...this.state.contacts, input] });
  };

  onFilter = event => {
    const { value } = event.currentTarget;
    this.setState({
      filter: value,
    });
  };

  onCheck = () => {
    const { filter, contacts } = this.state;

    if (filter) {
      return contacts.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };

  onDeleteContact = id => {
    const contactName = this.state.contacts.filter(el => el.id !== id);
    this.setState({
      contacts: contactName,
    });
  };

  render() {
    const filteredContacts = this.onCheck();
    return (
      <div
        style={{
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
          padding: 50,
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <Filter state={this.state} onChange={this.onFilter} />
        <h2>Contacts</h2>
        <Contacts
          contacts={filteredContacts}
          deleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
