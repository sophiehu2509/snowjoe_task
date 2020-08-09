import React, { Component } from 'react'
import {QuestionContext} from  '../Context'

export default class Show extends Component {
    static contextType = QuestionContext

    getNum = () => {
        let correctNum = 0;
        let countRes = this.context.countRes;
        for(var i = 0; i<countRes.length; i++){
            if(countRes[i] === 1){
                correctNum ++;
            }
        }
        return correctNum
    }
    render() {
        return (
            <div className="result">
                <a>Result</a>
                <p>You got {this.getNum()} / 10 questions correct</p>
                <p>{this.getNum()/10 * 100}%</p>
            </div>
        )
    }
}
