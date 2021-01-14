import { Component } from "react";
import s from "./ContactForm.module.css";
import PropTypes from "prop-types";

class ContactForm extends Component {
  state = {
    name: "",
    phone: "",
  };

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.trim() === "" || this.state.number.trim() === "") {
      alert("Fill in all the fields!");
      return;
    }
    this.props.onSubmit(this.state);

    this.setState({ name: "", number: "" });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChangeForm}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="text"
            name="number"
            value={number}
            onChange={this.handleChangeForm}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
