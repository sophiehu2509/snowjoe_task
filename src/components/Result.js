import React from 'react'
import {Button} from 'react-bootstrap'
import {QuestionConsumer} from '../Context'

export default function Result() {

    return (
        <QuestionConsumer>{
            value => {

                return (
                    <>
                     <div className="footer">
                        <div className ="btn">
                          <Button variant="success" onClick={value.submitAnswer}>Submit</Button>
                       </div>
                       {
                            value.finishQuiz?<></>:<p className="info">Answer all questions before submitting. Unanswered questions are displayed in yellow</p>
                       }
                       
                    </div>
                    </>
                )

            }
        }
        </QuestionConsumer>
    )
}
