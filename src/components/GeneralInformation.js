import React, { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
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
        <div className="section view">
          <div>General Information:</div>
          <div>
            <span>Name: </span>
            <span>{this.props.general.name}</span>
          </div>
          <div>
            <span>Email: </span> <span>{this.props.general.email}</span>
          </div>
          <div>
            <span>Phone Number: </span>
            <span>{this.props.general.phone_number}</span>
          </div>
          <div>
            <button onClick={this.editButtonClicked}>Edit</button>
          </div>
        </div>
      );
    else
      return (
        <div className="section edit">
          <div>Edit your general information:</div>
          <form onSubmit={this.handleSubmit}>
            <div className="flex-item">
              <label>Name: </label>
              <input
                required
                value={this.state.temp_name}
                onChange={this.handleNameChange}
              ></input>
            </div>
            <div className="flex-item">
              <label>Email: </label>
              <input
                required
                value={this.state.temp_email}
                onChange={this.handleEmailChange}
              ></input>
            </div>

            <div className="flex-item">
              <label>Phone Number: </label>
              <input
                required
                value={this.state.temp_phone_number}
                onChange={this.handlePhoneNumberChange}
              ></input>
            </div>

            <div className="flex-item">
              <button type="button" onClick={this.editButtonClicked}>
                Cancel
              </button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      );
  }
}

export default GeneralInformation;
