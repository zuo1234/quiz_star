import React from "react"
class Quiz extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.quiz.quiz_title}</h1>
      </React.Fragment>
    )
  }
}

export default Quiz;