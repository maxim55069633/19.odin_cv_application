import React, { Component, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const PracticalExperience = (props) => {
  const [isEditing, setIsEditing] = useState(true);
  const [temp_company_name, setTemp_company_name] = useState(
    props.practical.company_name
  );
  const [temp_position_title, setTemp_position_title] = useState(
    props.practical.position_title
  );
  const [temp_main_tasks_of_the_jobs, setTemp_main_tasks_of_the_jobs] =
    useState(props.practical.main_tasks_of_the_jobs);
  const [temp_date_of_work_start, setTemp_date_of_work_start] = useState(
    props.practical.date_of_work_start
  );
  const[temp_date_of_work_end, setTemp_date_of_work_end] = useState(
    props.practical.date_of_work_end
  );
  const [temp_new_task, setTemp_new_task] = useState("");
  const [temp_practical, setTemp_practical] = useState({
    company_name: props.practical.company_name,
    position_title: props.practical.position_title,

    main_tasks_of_the_jobs: props.practical.main_tasks_of_the_jobs,
    date_of_work_start: props.practical.date_of_work_start,
    date_of_work_end: props.practical.date_of_work_end,
  });

  const editButtonClicked = () => {
    setIsEditing(!isEditing);
    setTemp_company_name(props.practical.company_name);
    setTemp_position_title(props.practical.position_title);
    setTemp_main_tasks_of_the_jobs(props.practical.main_tasks_of_the_jobs);
    setTemp_date_of_work_start(props.practical.date_of_work_start);
    setTemp_date_of_work_end(props.practical.date_of_work_end);
    setTemp_new_task("");
  };

  const handleCompanyNameChange = (event) => {
    setTemp_company_name(event.target.value);
  };

  const handlePositionTitleChange = (event) => {
    setTemp_position_title(event.target.value);
  };

  const handleDateOfWorkStartChange = (event) => {
    setTemp_date_of_work_start(event.target.value);
  };

  const handleDateOfWorkEndChange = (event) => {
    setTemp_date_of_work_end(event.target.value);
  };

  const handleNewTaskChange = (event) => {
    setTemp_new_task(event.target.value);
  };

  const AddNewTask = (event) => {
    const target = document.querySelector("#add_new_task");

    if (target.value != "") {
      setTemp_main_tasks_of_the_jobs(
        temp_main_tasks_of_the_jobs.concat(target.value)
      );
      setTemp_new_task("");
    }

    event.preventDefault();
  };

  const DeleteTask = (event, id) => {
    const test = temp_main_tasks_of_the_jobs.filter((item, index) => {
      return `task-${index}` != id;
    });

    setTemp_main_tasks_of_the_jobs(test);

    event.preventDefault();
  };

  const handleSubmit = (event) => {
    setIsEditing(!isEditing);
    setTemp_practical({
      ...temp_practical,
      company_name: temp_company_name,
      position_title: temp_position_title,
      main_tasks_of_the_jobs: temp_main_tasks_of_the_jobs,
      date_of_work_start: temp_date_of_work_start,
      date_of_work_end: temp_date_of_work_end,
    });

    event.preventDefault();
  };

  useEffect(
    () => {
      props.practicalSubmit(temp_practical);
    }
    , [temp_practical]);
    
  const displayDate = (source) => {
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
  };

  let main_tasks_of_the_jobs = "";
  if (isEditing == true) {
    main_tasks_of_the_jobs = () => {
      return temp_main_tasks_of_the_jobs.map((item, index) => {
        return (
          <li key={`task-${index}`} id={`task-${index}`}>
            {item}
            <FontAwesomeIcon
              icon={faTrash}
              onClick={(event) => DeleteTask(event, `task-${index}`)}
            />
            ;
          </li>
        );
      });
    };
  } else {
    main_tasks_of_the_jobs = () => {
      return temp_main_tasks_of_the_jobs.map((item, index) => {
        return (
          <li key={`task-${index}`} id={`task-${index}`}>
            {item}
          </li>
        );
      });
    };
  }

  if (isEditing == false)
    return (
      <div className="section view">
        <div>Practical Experience:</div>
        <div>
          <span>Company Name: </span>
          <span>{props.practical.company_name}</span>
        </div>
        <div>
          <span>Position Title: </span>
          <span>{props.practical.position_title}</span>
        </div>
        <div>
          <span>Main Tasks of Your Jobs: </span>
          <span>
            <ul>{main_tasks_of_the_jobs()}</ul>
          </span>
        </div>
        <div>
          {displayDate(props.practical.date_of_work_start)} -{" "}
          {displayDate(props.practical.date_of_work_end)}
        </div>
        <div>
          <button onClick={editButtonClicked}>Edit</button>
        </div>
      </div>
    );
  else
    return (
      <div className="section edit">
        <div>Edit your practical experience:</div>
        <form onSubmit={handleSubmit}>
          <div className="flex-item">
            <label>Company Name: </label>
            <input
              required
              value={temp_company_name}
              onChange={handleCompanyNameChange}
            ></input>
          </div>
          <div className="flex-item">
            <label>Position Title: </label>
            <input
              required
              value={temp_position_title}
              onChange={handlePositionTitleChange}
            ></input>
          </div>
          <div className="flex-item">
            <div>Main Tasks of Your Jobs: </div>
            <ul className="practical-task-list">
              <div>{main_tasks_of_the_jobs()}</div>

              <input
                id="add_new_task"
                value={temp_new_task}
                onChange={handleNewTaskChange}
              ></input>
              <button type="button" onClick={AddNewTask}>
                Add a new task
              </button>
            </ul>
          </div>
          <div className="flex-item">
            <label>From: </label>
            <input
              required
              type="date"
              value={temp_date_of_work_start}
              onChange={handleDateOfWorkStartChange}
            ></input>
          </div>

          <div className="flex-item">
            <label>To: </label>
            <input
              required
              type="date"
              value={temp_date_of_work_end}
              onChange={handleDateOfWorkEndChange}
            ></input>
          </div>

          <div className="flex-item">
            <button type="button" onClick={editButtonClicked}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
};

export default PracticalExperience;
