'use client'
import { useRef } from 'react'
import BackDrop from './BlackDrop'
import FormButton from './Buttons/FormButton'
import { FadeComponent } from './Animates/Fade'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeUpComponent } from './Animates/FadeUp'
import Questions from './Questions'
const FormCharacter = ({
  show,
  hide,
  startedQuestion,
  answerQuestion,
  questions,
  currentQuestion,
  BackButtonQuestion,
  answers,
  nextQuestion,
}: any) => {
  const backdrop = useRef(null)
  const form = useRef(null)
  return (
    <AnimatePresence>
      {show && (
        <>
          <FadeComponent isVisible={show ?? false}>
            <BackDrop reference={backdrop} onclick={hide} />
          </FadeComponent>
          <FadeUpComponent className='w-fit block fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] max-w-3xl '>
            <div className=' bg-white p-12 z-50 rounded-lg shadow-4xl max-w-3xl w-[1000px] h-[550px]'>
              {currentQuestion < 0 ? (
                <>
                  <div className='w-full h-64 bg-black mb-5'> </div>
                  <div className='flex gap-10 justify-between w-full'>
                    <div>
                      <h1 className='text-4xl'>แบบทดสอบมาตรฐาน ชุดที่ 1</h1>
                      <h1 className='text-4xl'>
                        วิชา การแบ่งประเภทการเข้าสังคม
                      </h1>
                    </div>
                    <div>
                      <h1 className='text-4xl'>
                        กลุ่มสาระ TouchmeToConnectYou
                      </h1>
                      <h1 className='text-4xl'>จำนวน 8 ข้อ</h1>
                    </div>
                  </div>
                  <div className='flex justify-center mt-8'>
                    <FormButton onclick={startedQuestion} text='START' />
                  </div>
                </>
              ) : (
                <Questions
                  answerQuestion={answerQuestion}
                  onclickBackbutton={BackButtonQuestion}
                  questions={questions}
                  currentQuestionIndex={currentQuestion}
                  answers={answers}
                  nextQuestion={nextQuestion}
                />
              )}
            </div>
          </FadeUpComponent>
        </>
      )}
    </AnimatePresence>
  )
}

export default FormCharacter
