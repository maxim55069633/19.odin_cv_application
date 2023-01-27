import React, { useEffect, useState } from "react";

const EducationalExperience = (props) => {
  const [isEditing, setIsEditing] = useState(true);
  const [temp_school_name, setTemp_school_name] = useState(
    props.educational.school_name
  );
  const [temp_title_of_study, setTemp_title_of_study] = useState(
    props.educational.title_of_study
  );
  const [temp_date_of_study_start, setTemp_date_of_study_start] = useState(
    props.educational.date_of_study_start
  );
  const [temp_date_of_study_end, setTemp_date_of_study_end] = useState(
    props.educational.date_of_study_end
  );
  const [temp_educational, setTemp_educational] = useState({
    school_name: props.educational.school_name,
    title_of_study: props.educational.title_of_study,
    date_of_study_start: props.educational.date_of_study_start,
    date_of_study_end: props.educational.date_of_study_end,
  });

  const editButtonClicked = () => {
    setIsEditing(!isEditing);
    setTemp_school_name(props.educational.school_name);
    setTemp_title_of_study(props.educational.title_of_study);
    setTemp_date_of_study_start(props.educational.date_of_study_start);
    setTemp_date_of_study_end(props.educational.date_of_study_end);
  };

  const handleSchoolNameChange = (event) => {
    setTemp_school_name(event.target.value);
  };

  const handleTitleOfStudyChange = (event) => {
    setTemp_title_of_study(event.target.value);
  };

  const handleDateOfStudyStartChange = (event) => {
    setTemp_date_of_study_start(event.target.value);
  };

  const handleDateOfStudyEndChange = (event) => {
    setTemp_date_of_study_end(event.target.value);
  };

  const handleSubmit = (event) => {
    setIsEditing(!isEditing);
    setTemp_educational({
      ...temp_educational,
      school_name: temp_school_name,
      title_of_study: temp_title_of_study,
      date_of_study_start: temp_date_of_study_start,
      date_of_study_end: temp_date_of_study_end,
    });

    event.preventDefault();
  };

  useEffect(() => {
    props.educationalSubmit(temp_educational);
  }, [temp_educational]);

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

  if (isEditing == false)
    return (
      <div className="section view">
        <div>Educational Experience:</div>
        <div>
          <span>School Name: </span>
          <span>{props.educational.school_name}</span>
        </div>
        <div>
          <span>Title of Study: </span>
          <span>{props.educational.title_of_study}</span>
        </div>
        <div>
          {displayDate(props.educational.date_of_study_start)} -{" "}
          {displayDate(props.educational.date_of_study_end)}
        </div>
        <div>
          <button onClick={editButtonClicked}>Edit</button>
        </div>
      </div>
    );
  else
    return (
      <div className="section edit">
        <div>Edit your educational experience:</div>
        <form onSubmit={handleSubmit}>
          <div className="flex-item">
            <label>School Name: </label>
            <input
              required
              value={temp_school_name}
              onChange={handleSchoolNameChange}
            ></input>
          </div>
          <div className="flex-item">
            <label>Title of Study: </label>
            <input
              required
              value={temp_title_of_study}
              onChange={handleTitleOfStudyChange}
            ></input>
          </div>
          <div className="flex-item">
            <label>From: </label>
            <input
              required
              type="date"
              value={temp_date_of_study_start}
              onChange={handleDateOfStudyStartChange}
            ></input>
          </div>
          <div className="flex-item">
            <label>To: </label>
            <input
              required
              type="date"
              value={temp_date_of_study_end}
              onChange={handleDateOfStudyEndChange}
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

export default EducationalExperience;
