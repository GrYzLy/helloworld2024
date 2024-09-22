import React, {Component} from 'react'

class Quiz extends Component {
  
  
  constructor(props){
    super()
    
    this.state = {
      playerScore : 0,
      questions: [
        {

          title: "What animal barks?",
          possibleAnswers: ["Dog", "Cat", "Lion"],
          rightAnswer: "Dog",
          playerChoice: null
        },
        {
          title: "What animal is more closely related to a tiger?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Cat",
          playerChoice: null
        },
        {
          title: "What animal is more closely related to a tiger?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Cat",
          playerChoice: null
        }
      ]
    }

 
  }

answerQuestion(index, choice)
{
  const answeredQuestion = this.state.questions[index]
  answeredQuestion.playerChoice = choice

  const allQuestions = this.state.questions
  allQuestions[index] = answeredQuestion

  this.setState({ questions : allQuestions},  this.updatePlayerScore())

}
updatePlayerScore()
{
  const playerScore = this.state.questions.filter(q => q.rightAnswer === q.playerChoice).length;
  this.setState({playerScore})
  console.log("New player score:", playerScore)
}

displayQuestion(index) {
  const question = this.state.questions[index]
  return (
    <div key={index}>
      <p>{question.title}</p>
      {question.possibleAnswers.map((posibleAnswer, answerIndex) => <button key={answerIndex} onClick={() => this.answerQuestion(index, posibleAnswer)} >{posibleAnswer}</button>)}
      {/* <button onClick={() => this.answerQuestion(index,question.possibleAnswers[0])}>{question.possibleAnswers[0]}</button>
      <button onClick={() => this.answerQuestion(index,question.possibleAnswers[1])}>{question.possibleAnswers[1]}</button>
     */}</div>
  )
}
  render()
  {
    console.log(this.state)
    return (
      <div>
        <h1>Quiz</h1>
        <div>Player score: {this.state.playerScore}</div>
        {this.state.questions.map((question, index) => this.displayQuestion(index))}
      </div>
    )
  }
}


export default Quiz;
