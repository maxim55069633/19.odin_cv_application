import React, { Component } from "react";

class EducationalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
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

  displayDate(source) {
    const stored_date = source.split("-");
    const MONTHS = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const result =
      stored_date[0] +
      " " +
      MONTHS[Number(stored_date[1]) - 1] +
      " " +
      stored_date[2];

    return result;
  }

  render() {
    if (this.state.isEditing == false)
      return (
        <div className="section view">
          <div>Educational Experience:</div>
          <div>
            <span>School Name: </span>
            <span>{this.props.educational.school_name}</span>
          </div>
          <div>
            <span>Title of Study: </span>
            <span>{this.props.educational.title_of_study}</span>
          </div>
          <div>
            {this.displayDate(this.props.educational.date_of_study_start)} -{" "}
            {this.displayDate(this.props.educational.date_of_study_end)}
          </div>
          <div>
            <button onClick={this.editButtonClicked}>Edit</button>
          </div>
        </div>
      );
    else
      return (
        <div className="section edit">
          <div>Edit your educational experience:</div>
          <form onSubmit={this.handleSubmit}>
            <div className="flex-item">
              <label>School Name: </label>
              <input
                required
                value={this.state.temp_school_name}
                onChange={this.handleSchoolNameChange}
              ></input>
            </div>
            <div className="flex-item">
              <label>Title of Study: </label>
              <input
                required
                value={this.state.temp_title_of_study}
                onChange={this.handleTitleOfStudyChange}
              ></input>
            </div>
            <div className="flex-item">
              <label>From: </label>
              <input
                required
                type="date"
                value={this.state.temp_date_of_study_start}
                onChange={this.handleDateOfStudyStartChange}
              ></input>
            </div>
            <div className="flex-item">
              <label>To: </label>
              <input
                required
                type="date"
                value={this.state.temp_date_of_study_end}
                onChange={this.handleDateOfStudyEndChange}
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

export default EducationalExperience;
