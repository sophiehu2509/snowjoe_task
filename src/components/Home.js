import React, { Component } from 'react'
import {QuestionContext} from  '../Context'
import {Container} from 'react-bootstrap'
import Header from './Header'
import Quiz from './Quiz'
import Result from './Result'
import Show from './Show'


export default class Home extends Component {
    static contextType = QuestionContext

    showRes = () => {
        console.log(this.context)
        if(this.context.submitQuiz && this.context.countNum === 10){
            return true;
        }
        return false;
    }

    render() {
      
        return (
            <>
            <h6 className="title">Quiz Application</h6>
            <Container>
                <Header />
                {this.showRes()&&<Show />}
                <Quiz />
                <Result />
            </Container>
            </>
        )
    }
}
