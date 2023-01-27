import React, { useEffect, useState } from "react";

const GeneralInformation = (props) => {
  const [isEditing, setIsEditing] = useState(true);
  const [temp_name, setTemp_name] = useState(props.general.name);
  const [temp_email, setTemp_email] = useState(props.general.email);
  const [temp_phone_number, setTemp_phone_number] = useState(
    props.general.phone_number
  );
  const [temp_general, setTemp_general] = useState({
    name: props.general.name,
    email: props.general.email,
    phone_number: props.general.phone_number,
  });

  const editButtonClicked = () => {
    setIsEditing(!isEditing);
    setTemp_name(props.general.name);
    setTemp_email(props.general.email);
    setTemp_phone_number(props.general.phone_number);
  };

  const handleNameChange = (event) => {
    setTemp_name(event.target.value);
  };

  const handleEmailChange = (event) => {
    setTemp_email(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setTemp_phone_number(event.target.value);
  };

  const handleSubmit = (event) => {
    setIsEditing(!isEditing);
    setTemp_general({
      ...temp_general,
      name: temp_name,
      email: temp_email,
      phone_number: temp_phone_number,
    });
    event.preventDefault();
  };

  useEffect(() => {
    props.generalSubmit(temp_general);
  }, [temp_general]);

  if (isEditing == false)
    return (
      <div className="section view">
        <div>General Information:</div>
        <div>
          <span>Name: </span>
          <span>{props.general.name}</span>
        </div>
        <div>
          <span>Email: </span> <span>{props.general.email}</span>
        </div>
        <div>
          <span>Phone Number: </span>
          <span>{props.general.phone_number}</span>
        </div>
        <div>
          <button onClick={editButtonClicked}>Edit</button>
        </div>
      </div>
    );
  else
    return (
      <div className="section edit">
        <div>Edit your general information:</div>
        <form onSubmit={handleSubmit}>
          <div className="flex-item">
            <label>Name: </label>
            <input
              required
              value={temp_name}
              onChange={handleNameChange}
            ></input>
          </div>
          <div className="flex-item">
            <label>Email: </label>
            <input
              required
              value={temp_email}
              onChange={handleEmailChange}
            ></input>
          </div>

          <div className="flex-item">
            <label>Phone Number: </label>
            <input
              required
              value={temp_phone_number}
              onChange={handlePhoneNumberChange}
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

export default GeneralInformation;
