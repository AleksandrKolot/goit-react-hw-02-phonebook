import React, { Component } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";

class App extends Component {
  handleSubmit = (data) => {
    const search = this.state.contacts.find(
      (el) => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (search) {
      alert(`${search.name} is already in contacts.`);
      return;
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
