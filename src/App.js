import React, { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: this.props.general,
      educational: this.props.educational,
      practical: this.props.practical,
    };
    this.generalSubmit = this.generalSubmit.bind(this);
    this.educationalSubmit = this.educationalSubmit.bind(this);
    this.practicalSubmit = this.practicalSubmit.bind(this);
  }

  generalSubmit(temp_general) {
    this.setState({
      general: temp_general,
    });
  }
  educationalSubmit(temp_educational) {
    this.setState({
      educational: temp_educational,
    });
  }
  practicalSubmit(temp_practical) {
    this.setState({
      practical: temp_practical,
    });
  }

  render() {
    return (
      <div>
        <h1>CV Application</h1>
        <GeneralInformation
          general={this.state.general}
          generalSubmit={this.generalSubmit}
        />
        <EducationalExperience
          educational={this.state.educational}
          educationalSubmit={this.educationalSubmit}
        />
        <PracticalExperience
          practical={this.state.practical}
          practicalSubmit={this.practicalSubmit}
        />
      </div>
    );
  }
}

export default App;
