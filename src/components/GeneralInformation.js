import React, { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      temp_name: this.props.general.name,
      temp_email: this.props.general.email,
      temp_phone_number: this.props.general.phone_number,
      temp_general: {
        name: this.props.general.name,
        email: this.props.general.email,
        phone_number: this.props.general.phone_number,
      },
    };

    this.editButtonClicked = this.editButtonClicked.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  editButtonClicked() {
    console.log(this.state.isEditing);
    this.setState({
      isEditing: !this.state.isEditing,
      temp_name: this.props.general.name,
      temp_email: this.props.general.email,
      temp_phone_number: this.props.general.phone_number,
    });
  }

  handleNameChange(event) {
    this.setState({ temp_name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ temp_email: event.target.value });
  }

  handlePhoneNumberChange(event) {
    this.setState({ temp_phone_number: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    this.setState({
      isEditing: !this.state.isEditing,
    });

    this.setState(
      {
        temp_general: {
          ...this.state.temp_general,
          name: this.state.temp_name,
          email: this.state.temp_email,
          phone_number: this.state.temp_phone_number,
        },
      },
      () => {
        this.props.generalSubmit(this.state.temp_general);
      }
    );

    event.preventDefault();
  }

  render() {
    if (this.state.isEditing == false)
      return (
        <div className="section">
          <p>General Information:</p>
          <p>Name: {this.props.general.name}</p>
          <p>Email: {this.props.general.email}</p>
          <p>Phone Number: {this.props.general.phone_number}</p>
          <button onClick={this.editButtonClicked}>Edit</button>
        </div>
      );
    else
      return (
        <div className="section">
          <p>Edit your general information:</p>
          <form onSubmit={this.handleSubmit}>
            <label>Name: </label>
            <input
              value={this.state.temp_name}
              onChange={this.handleNameChange}
            ></input>
            <label>Email: </label>
            <input
              value={this.state.temp_email}
              onChange={this.handleEmailChange}
            ></input>
            <label>Phone Number: </label>
            <input
              value={this.state.temp_phone_number}
              onChange={this.handlePhoneNumberChange}
            ></input>

            <button type="button" onClick={this.editButtonClicked}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
  }
}

export default GeneralInformation;
