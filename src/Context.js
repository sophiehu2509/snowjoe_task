import React, { Component } from 'react'
import questions from './questions'

const QuestionContext = React.createContext();

export class QuestionProvider extends Component {
    state={
        quiz:[],
        correctNum:0,
        showResult:false,
        loading:true,
        answerSelected:[], //user choosed answer
        result:[],  //corrent answer 
        countRes:[],   //mark answer 
        countNum:0,    //count unfinished question 
        finishQuiz:true,
        submitQuiz:false
    }


    componentDidMount() {
        let quiz = questions.quiz;
        let result = quiz.map((item, index) => {
            return item.result;
        })
        let answerSelected = quiz.map((item, index) => {
            return item.answer;
        })
        
        let countRes = quiz.map((item, index) => {
            return item.answer;
        })
        this.setState({
            ...this.state,
            quiz:quiz,
            loading:false,
            result:result,
            answerSelected:answerSelected,
            countRes:countRes  
        })
    }
    
    handleChangeAnswer = (event) => {
        
        let answerSelected = this.state.answerSelected;
        let index = event.target.value; //question number 
        answerSelected[index] = parseInt(event.target.id); //selected id
        
        
        let countRes = this.state.countRes;
        if( answerSelected[index] === this.state.result[index]){
            countRes[index]=1
        }else{
            countRes[index]=0
        }

        this.setState({
            answerSelected:answerSelected,
            countRes:countRes
        })
      
    }

    submitAnswer = () =>{
       console.log(this.state)
        let countRes = this.state.countRes;
        let countNum = 0;
        for(var i = 0; i<countRes.length; i++){
            if(countRes[i] !== -1){
                countNum ++;
            }
        }

        if(countNum === 10){
            this.setState({
                finishQuiz:true,
            })
        }else{
            this.setState({
                finishQuiz:false,
            })
        }
        this.setState({
            submitQuiz:true,
            countNum:countNum
        })
     
    }

    render() {
    
        return (
            <QuestionContext.Provider value={{...this.state, 
            handleChangeAnswer:this.handleChangeAnswer,
            submitAnswer:this.submitAnswer}}>
                {this.props.children}
            </QuestionContext.Provider>
        )
    }
}
const QuestionConsumer = QuestionContext.Consumer;
export {QuestionContext, QuestionConsumer}
