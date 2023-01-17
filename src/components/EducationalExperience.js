import React, { Component } from "react";

class EducationalExperience extends Component {
  constructor(props) {
    super(props);
  }

  const;

  render() {
    const info = this.props.educational;

    return (
      <div className="section">
        <p>Educational Experience:</p>
        <p>School Name: {info.school_name}</p>
        <p>Title of Study: {info.title_of_study}</p>
        <p>
          {info.date_of_study_start} - {info.date_of_study_end}
        </p>
      </div>
    );
  }
}

export default EducationalExperience;
