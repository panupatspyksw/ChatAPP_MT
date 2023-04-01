'use client'

import { useEffect, useState } from 'react'
import Question from './Question'
import FormButton from './Buttons/FormButton'
const Questions = ({
  questions,
  currentQuestionIndex,
  answerQuestion,
  onclickBackbutton,
  answers,
  nextQuestion,
}: any) => {
  const [answered, setAnswered] = useState(false)
  const [question, setQuestion] = useState(questions[currentQuestionIndex])
  const onAnswer = (e: any) => {
    setAnswered(true)
    answerQuestion(e)
  }
  const nextQuestion_ = () => {
    setQuestion(questions[currentQuestionIndex])
    nextQuestion()
    setAnswered(false)
    console.log(currentQuestionIndex, questions[currentQuestionIndex])
  }

  return (
    <div className='p-5'>
      {currentQuestionIndex}
      {questions.length > 1 && (
        <Question
          answerQuestion={onAnswer}
          questionNumber={currentQuestionIndex}
          title={question.title}
          options={question.options}
          defaultAnswer={answers[currentQuestionIndex] ?? -1}
        />
      )}
      <hr className='mt-10'></hr>
      <div className='mt-10 w-full flex'>
        <FormButton onclick={onclickBackbutton} text={'Back'} />
        <div
          className={`ml-auto ${
            answered === false && 'opacity-50 select-none pointer-events-none'
          }`}
        >
          <FormButton text={'Next'} onclick={nextQuestion_} />
        </div>
      </div>
    </div>
  )
}

export default Questions
