import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
    clinicname: "",
    clinicnameError: "",
    address: "",
    addressError: "",
    phone: "",
    phoneError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: ""
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      clinicnameError: "",
      addressError: "",
      phoneError: "",
      emailError: "",
      passwordError: ""
    };

    if (this.state.phone.length < 10) {
      isError = true;
      errors.phoneError = "Enter your mobile number";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        clinicname: "",
        clinicnameError: "",
        address: "",
        addressError: "",
        phone: "",
        phoneError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
      });
    }
  };

  render() {
    return (
      <form>
        <TextField
          name="clinicname"
          hintText="clinic name"
          floatingLabelText="clinic name"
          value={this.state.clinicname}
          onChange={e => this.change(e)}
          errorText={this.state.clinicnameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="address"
          hintText="Address"
          floatingLabelText="Address"
          value={this.state.address}
          onChange={e => this.change(e)}
          errorText={this.state.adressError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="phone"
          hintText="Contact Number"
          floatingLabelText="Contact Number"
          onKeyDown={ (evt) => evt.key === '.' && evt.preventDefault() }
          maxlength="10"
          value={this.state.phone}
          onChange={e => this.change(e)}
          errorText={this.state.phoneError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="email"
          hintText="Email"
          floatingLabelText="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
          errorText={this.state.emailError}
          floatingLabelFixed
        />
        <br />
        {/* <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
          errorText={this.state.passwordError}
          type="password"
          floatingLabelFixed
        /> */}
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}
