import React, { Component } from "react";

class PracticalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const info = this.props.practical;

    const main_tasks_of_the_jobs = () => {
      return info["main_tasks_of_the_jobs"].map((item, index) => {
        return (
          <li key={index} id={index}>
            {item}
          </li>
        );
      });
    };

    return (
      <div className="section">
        <p>Practical Experience:</p>
        <p>Company Name: {info.company_name}</p>
        <p>Position Title: {info.position_title}</p>
        <div>
          Main Tasks of Your Jobs: <ul>{main_tasks_of_the_jobs()}</ul>
        </div>
        <p>
          {info.date_of_work_start} - {info.date_of_work_end}
        </p>
      </div>
    );
  }
}

export default PracticalExperience;
