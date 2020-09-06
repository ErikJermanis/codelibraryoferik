import React from 'react';
import './form1.scss';
import FormInput1 from '../../components/formInput1/formInput1';
import Button1 from '../../components/button1/button1';

class Form1 extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      email: '',
      firstname: '',
      lastname: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert('bravo');
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  render() {
    return(
      <div className="form1-wrapper">
        <h2 className="form1-H2">Subscribe to our newsletter</h2>
        <form onSubmit={this.handleSubmit} className="form1-form">
          <FormInput1
            name='firstname'
            type='text'
            handleChange={this.handleChange}
            value={this.state.firstname}
            label='First name'
            required
          />
          <FormInput1
            name='lastname'
            type='text'
            handleChange={this.handleChange}
            value={this.state.lastname}
            label='Last name'
            required
          />
          <FormInput1
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Your best email address'
            required
          />
          <Button1 type='submit'>Subscribe</Button1>
        </form>
      </div>
    )
  }
}

export default Form1;