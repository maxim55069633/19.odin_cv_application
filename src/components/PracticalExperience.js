import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class PracticalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      temp_company_name: this.props.practical.company_name,
      temp_position_title: this.props.practical.position_title,

      temp_main_tasks_of_the_jobs: this.props.practical.main_tasks_of_the_jobs,
      temp_date_of_work_start: this.props.practical.date_of_work_start,
      temp_date_of_work_end: this.props.practical.date_of_work_end,
      temp_new_task: "",
      temp_practical: {
        company_name: this.props.practical.company_name,
        position_title: this.props.practical.position_title,

        main_tasks_of_the_jobs: this.props.practical.main_tasks_of_the_jobs,
        date_of_work_start: this.props.practical.date_of_work_start,
        date_of_work_end: this.props.practical.date_of_work_end,
      },
    };

    this.editButtonClicked = this.editButtonClicked.bind(this);
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    this.handlePositionTitleChange = this.handlePositionTitleChange.bind(this);

    this.handleDateOfWorkStartChange =
      this.handleDateOfWorkStartChange.bind(this);
    this.handleDateOfWorkEndChange = this.handleDateOfWorkEndChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleNewTaskChange = this.handleNewTaskChange.bind(this);
    this.AddNewTask = this.AddNewTask.bind(this);
    this.DeleteTask = this.DeleteTask.bind(this);
  }

  editButtonClicked() {
    this.setState({
      isEditing: !this.state.isEditing,
      temp_company_name: this.props.practical.company_name,
      temp_position_title: this.props.practical.position_title,
      temp_main_tasks_of_the_jobs: this.props.practical.main_tasks_of_the_jobs,
      temp_date_of_work_start: this.props.practical.date_of_work_start,
      temp_date_of_work_end: this.props.practical.date_of_work_end,

      temp_new_task: "",
    });
  }

  handleCompanyNameChange(event) {
    this.setState({ temp_company_name: event.target.value });
  }

  handlePositionTitleChange(event) {
    this.setState({ temp_position_title: event.target.value });
  }

  handleDateOfWorkStartChange(event) {
    this.setState({ temp_date_of_work_start: event.target.value });
  }

  handleDateOfWorkEndChange(event) {
    this.setState({ temp_date_of_work_end: event.target.value });
  }

  handleNewTaskChange(event) {
    this.setState({ temp_new_task: event.target.value });
  }

  AddNewTask(event) {
    event.preventDefault();
    const target = document.querySelector("#add_new_task");
    console.log(target.value);

    if (target.value != "")
      this.setState({
        temp_main_tasks_of_the_jobs:
          this.state.temp_main_tasks_of_the_jobs.concat(target.value),
        temp_new_task: "",
      });
  }

  DeleteTask(event, id) {
    event.preventDefault();
    console.log(id);
    const test = this.state.temp_main_tasks_of_the_jobs.filter(
      (item, index) => {
        return `task-${index}` != id;
      }
    );
    this.setState({
      temp_main_tasks_of_the_jobs: test,
    });
  }

  handleSubmit(event) {
    this.setState(
      {
        isEditing: !this.state.isEditing,
        temp_practical: {
          ...this.state.temp_practical,
          company_name: this.state.temp_company_name,
          position_title: this.state.temp_position_title,
          main_tasks_of_the_jobs: this.state.temp_main_tasks_of_the_jobs,
          date_of_work_start: this.state.temp_date_of_work_start,
          date_of_work_end: this.state.temp_date_of_work_end,
        },
      },
      () => {
        this.props.practicalSubmit(this.state.temp_practical);
      }
    );

    event.preventDefault();
  }

  render() {
    let main_tasks_of_the_jobs = "";
    if (this.state.isEditing == true) {
      main_tasks_of_the_jobs = () => {
        return this.state.temp_main_tasks_of_the_jobs.map((item, index) => {
          return (
            <li key={`task-${index}`} id={`task-${index}`}>
              {item}
              <FontAwesomeIcon
                icon={faTrash}
                onClick={(event) => this.DeleteTask(event, `task-${index}`)}
              />
              ;
            </li>
          );
        });
      };
    } else {
      main_tasks_of_the_jobs = () => {
        return this.state.temp_main_tasks_of_the_jobs.map((item, index) => {
          return (
            <li key={`task-${index}`} id={`task-${index}`}>
              {item}
            </li>
          );
        });
      };
    }

    if (this.state.isEditing == false)
      return (
        <div className="section">
          <p>Practical Experience:</p>
          <p>Company Name: {this.props.practical.company_name}</p>
          <p>Position Title: {this.props.practical.position_title}</p>
          <div>
            Main Tasks of Your Jobs: <ul>{main_tasks_of_the_jobs()}</ul>
          </div>
          <p>
            {this.props.practical.date_of_work_start} -{" "}
            {this.props.practical.date_of_work_end}
          </p>
          <button onClick={this.editButtonClicked}>Edit</button>
        </div>
      );
    else
      return (
        <div className="section">
          <p>Edit your practical experience:</p>
          <form onSubmit={this.handleSubmit}>
            <label>Company Name: </label>
            <input
              required
              value={this.state.temp_company_name}
              onChange={this.handleCompanyNameChange}
            ></input>
            <label>Position Title: </label>
            <input
              required
              value={this.state.temp_position_title}
              onChange={this.handlePositionTitleChange}
            ></input>
            <div>
              Main Tasks of Your Jobs:{" "}
              <ul>
                {main_tasks_of_the_jobs()}

                <input
                  id="add_new_task"
                  value={this.state.temp_new_task}
                  onChange={this.handleNewTaskChange}
                ></input>
                <button type="button" onClick={this.AddNewTask}>
                  Add a new task
                </button>
              </ul>
            </div>
            <label>From: </label>
            <input
              required
              value={this.state.temp_date_of_work_start}
              onChange={this.handleDateOfWorkStartChange}
            ></input>

            <label>To: </label>
            <input
              required
              value={this.state.temp_date_of_work_end}
              onChange={this.handleDateOfWorkEndChange}
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

export default PracticalExperience;
