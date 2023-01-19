import React, { Component } from "react";

class EducationalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      temp_school_name: this.props.educational.school_name,
      temp_title_of_study: this.props.educational.title_of_study,
      temp_date_of_study_start: this.props.educational.date_of_study_start,
      temp_date_of_study_end: this.props.educational.date_of_study_end,
      temp_educational: {
        school_name: this.props.educational.school_name,
        title_of_study: this.props.educational.title_of_study,
        date_of_study_start: this.props.educational.date_of_study_start,
        date_of_study_end: this.props.educational.date_of_study_end,
      },
    };

    this.editButtonClicked = this.editButtonClicked.bind(this);
    this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this);
    this.handleTitleOfStudyChange = this.handleTitleOfStudyChange.bind(this);
    this.handleDateOfStudyStartChange =
      this.handleDateOfStudyStartChange.bind(this);
    this.handleDateOfStudyEndChange =
      this.handleDateOfStudyEndChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  editButtonClicked() {
    this.setState({
      isEditing: !this.state.isEditing,
      temp_school_name: this.props.educational.school_name,
      temp_title_of_study: this.props.educational.title_of_study,
      temp_date_of_study_start: this.props.educational.date_of_study_start,
      temp_date_of_study_end: this.props.educational.date_of_study_end,
    });
  }

  handleSchoolNameChange(event) {
    this.setState({ temp_school_name: event.target.value });
  }

  handleTitleOfStudyChange(event) {
    this.setState({ temp_title_of_study: event.target.value });
  }

  handleDateOfStudyStartChange(event) {
    this.setState({ temp_date_of_study_start: event.target.value });
  }

  handleDateOfStudyEndChange(event) {
    this.setState({ temp_date_of_study_end: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);

    this.setState({
      isEditing: !this.state.isEditing,
    });

    this.setState(
      {
        temp_educational: {
          ...this.state.temp_educational,
          school_name: this.state.temp_school_name,
          title_of_study: this.state.temp_title_of_study,
          date_of_study_start: this.state.temp_date_of_study_start,
          date_of_study_end: this.state.temp_date_of_study_end,
        },
      },
      () => {
        this.props.educationalSubmit(this.state.temp_educational);
      }
    );

    event.preventDefault();
  }

  render() {
    if (this.state.isEditing == false)
      return (
        <div className="section">
          <p>Educational Experience:</p>
          <p>School Name: {this.props.educational.school_name}</p>
          <p>Title of Study: {this.props.educational.title_of_study}</p>
          <p>
            {this.props.educational.date_of_study_start} -
            {this.props.educational.date_of_study_end}
          </p>
          <button onClick={this.editButtonClicked}>Edit</button>
        </div>
      );
    else
      return (
        <div className="section">
          <p>Edit your educational experience:</p>
          <form onSubmit={this.handleSubmit}>
            <label>School Name: </label>
            <input
              required
              value={this.state.temp_school_name}
              onChange={this.handleSchoolNameChange}
            ></input>
            <label>Title of Study: </label>
            <input
              required
              value={this.state.temp_title_of_study}
              onChange={this.handleTitleOfStudyChange}
            ></input>
            <label>From: </label>
            <input
              required
              value={this.state.temp_date_of_study_start}
              onChange={this.handleDateOfStudyStartChange}
            ></input>
            <label>To: </label>
            <input
              required
              value={this.state.temp_date_of_study_end}
              onChange={this.handleDateOfStudyEndChange}
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

export default EducationalExperience;
