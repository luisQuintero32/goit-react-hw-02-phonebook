import React, { Component } from 'react';
import style from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = name => e => {
    const { target } = e;

    this.setState(() => ({
      [name]: target.value,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState(() => ({
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <div className={style.inputContent}>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <div className={style.inputsCont}>
            <p>Name </p>

            <input
              value={this.state.name}
              onChange={this.handleChange('name')}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              className={style.input}
              required
            />
            <p>Number</p>
            <input
              value={this.state.number}
              onChange={this.handleChange('number')}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              className={style.input}
              required
            />
          </div>
          <button type="submit" className={style.buttonEditor}>
            ADD
          </button>
        </form>
      </div>
    );
  }
};

export default ContactForm;