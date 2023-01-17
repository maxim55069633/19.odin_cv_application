import React, { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: this.props.general,
    };
    this.generalSubmit = this.generalSubmit.bind(this);
  }

  generalSubmit(temp_general) {
    this.setState({
      //   isEditing: !this.state.isEditing,
      general: temp_general,
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
        <EducationalExperience educational={this.props.educational} />
        <PracticalExperience practical={this.props.practical} />
      </div>
    );
  }
}

export default App;
