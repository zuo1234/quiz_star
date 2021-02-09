import React from "react"
import Quiz from "./Quiz"

class Quizzes extends React.Component {
  render() {
    return (
      <React.Fragment>
        {
          this.props.quizzes.map((quiz, index) => {
              return <Quiz key={index} quiz={quiz}/>
            }
          )
        }
      </React.Fragment>
    )
  }
}

export default Quizzes;