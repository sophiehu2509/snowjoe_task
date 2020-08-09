import React, { Component } from 'react'
import {QuestionContext} from  '../Context'
import Loading from './Loading'
// import {Row} from 'react-bootstrap'
import Answer from './Answer'

export default class Quiz extends Component {
    static contextType = QuestionContext
    
    getClass =(index) => {

        let countNum = this.context.countNum;
        let countRes = this.context.countRes;

        if(countNum < 10){
            return "question yellow"
        }else if(countRes[index] === 0){
            return "question red"
        }else {
            return "question green"
        }
    }

    addMark = (countRes, index) => {
      
        if(countRes[index] === 1){
            return <div className="bottomMark correct">correct</div>
        }
        return <div className="bottomMark wrong">wrong</div>
    }

    render() {

        let {quiz, loading, answerSelected, submitQuiz, countNum, countRes, result, handleChangeAnswer} = this.context
        quiz = quiz.map((item, indexQuestion) => {
            return (
            <div className={submitQuiz?this.getClass(indexQuestion):"question"} key={indexQuestion}>
                <div>{indexQuestion + 1 + '. ' + item.question}</div>
                <ul className="chooseItems">
                    {item.choose.map((content, index)=> {
            
                        return <Answer 
                          selected = {answerSelected[indexQuestion]} 
                          questionNum = {indexQuestion} 
                          answerId = {index}
                          answerContent = {content}
                          handleChangeAnswer = {handleChangeAnswer}
                          answerCountNum = {countNum}
                          answerCountRes = {countRes}
                          answerSubmitQuiz = {submitQuiz}
                          answerResult={result}
                          key={index}/>
                        })}
                   
                </ul>
                {submitQuiz &&countNum === 10 && this.addMark(countRes, indexQuestion)}
            </div>
            )
        })
        
        return (
            <div className="quizzes">
                {loading?<Loading />:quiz}
            </div>
        )
    }
}
