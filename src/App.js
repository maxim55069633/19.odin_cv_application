import React, { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

const App = (props) => {
  let [general, setGeneral] = useState(props.general);
  let [educational, setEducational] = useState(props.educational);
  let [practical, setPractical] = useState(props.practical);

  const generalSubmit = (temp_general) => {
    setGeneral(temp_general);
  };

  const educationalSubmit = (temp_educational) => {
    setEducational(temp_educational);
  };
  const practicalSubmit = (temp_practical) => {
    setPractical(temp_practical);
  };

  return (
    <div>
      <h1>CV Application</h1>
      <GeneralInformation general={general} generalSubmit={generalSubmit} />
      <EducationalExperience
        educational={educational}
        educationalSubmit={educationalSubmit}
      />
      <PracticalExperience
        practical={practical}
        practicalSubmit={practicalSubmit}
      />
    </div>
  );
};

export default App;
