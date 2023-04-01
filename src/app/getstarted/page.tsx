'use client'

import FormCharacter from '@/components/FormCharacter'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Page() {
  const [showPopup, setshowPopup] = useState(false)
  const [answers, setAnswers] = useState([''])
  const [currentQuestion, setcurrentQuestion] = useState(-1)
  const [questions, setQuestions] = useState([])

  const TriggerPopup = () => {
    setshowPopup(true)
  }
  const CancelPopup = () => {
    setcurrentQuestion(-1)
    setshowPopup(false)
    setAnswers([])
  }
  const startedQuestion = () => {
    setcurrentQuestion(0)
    setAnswers([])
  }
  const BackButtonQuestion = () => {
    if (currentQuestion > -1) {
      setcurrentQuestion((prev) => prev - 1)
    }
  }

  const answerQuestion = (e: any) => {
    const AnswerVal = e.target.value
    const updatedAnswers = answers ?? []
    updatedAnswers[currentQuestion] = AnswerVal
    setAnswers(updatedAnswers)
    console.log('answers:', answers)
  }
  const nextQuestion = () => {
    if (currentQuestion < 10) {
      setcurrentQuestion((prev) => prev + 1)
    }
  }

  useEffect(() => {
    ;(async function () {
      const loadQuestions = await require('../../data/Questions.json')
      setQuestions(loadQuestions)
    })()
  }, [])

  return (
    <>
      <main
        className={`${showPopup && 'overflow-hidden'} max-h-screen relative`}
      >
        <FormCharacter
          show={showPopup}
          hide={CancelPopup}
          answers={answers}
          startedQuestion={startedQuestion}
          questions={questions}
          currentQuestion={currentQuestion}
          BackButtonQuestion={BackButtonQuestion}
          answerQuestion={answerQuestion}
          nextQuestion={nextQuestion}
        />
        <div className='min-h-[200vh] bg-slate-400'>
          <div className='min-h-screen flex justify-center align-middle  items-center'>
            <div className='bg-white shadow-2xl rounded-2xl p-12'>
              <h1 className='text-8xl'>TOUCH ME YOU</h1>
              <button
                onClick={TriggerPopup}
                className='py-3 px-10 text-3xl mx-auto block w-fit mt-4 rounded-full shadow-lg bg-rose-500 hover:scale-[.9] duration-300 text-white z-0 relative'
              >
                GET STARTED
              </button>
            </div>
          </div>
          <div className='m-24 p-12 bg-white shadow-2xl'>
            <h1 className='text-8xl text-center'>Character Card Show</h1>
          </div>
        </div>
      </main>
    </>
  )
}
