import React from 'react'
import PropTypes from 'prop-types'

function getClass(countNum, countRes, result, questionNum, index) {

   if(countNum < 10){
       return "answerItem"
   }else if(countRes[questionNum] === 0){
       if(index === result[questionNum]){
        return "answerItem greenItem"
       } 
   }
   return "answerItem"
}


export default function Answer(props) {

    return (
        <li className={getClass(props.answerCountNum, props.answerCountRes, props.answerResult, props.questionNum, props.answerId)}>
            <label>
                <input type='radio' 
                onChange={props.handleChangeAnswer}
                id={props.answerId} 
                checked={props.selected === props.answerId}
                value = {props.questionNum} 
                />
                {props.answerContent}
            </label>
       </li> 
     
    )
}

Answer.propTypes = {
    answerCountNum:PropTypes.number.isRequired,
    answerCountRes:PropTypes.array.isRequired,
    answerId:PropTypes.number.isRequired,
    answerResult:PropTypes.array.isRequired,
    questionNum:PropTypes.number.isRequired
}