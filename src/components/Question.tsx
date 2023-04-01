import { useState } from 'react'

interface question {
  title: string
  options: string[]
  answerQuestion: any
  defaultAnswer: number
  questionNumber: number
}

const Question = (question: question) => {
  const [defaultValue, setdefaultValue] = useState(question.defaultAnswer)
  const onChange = (e: any) => {
    question.answerQuestion(e)
    setdefaultValue(e.target.value)
  }

  return (
    <>
      <div>
        <div className='text-5xl'>{defaultValue}</div>
        <h1 className='text-5xl'>
          {question.questionNumber + 1}.{question.title}
        </h1>
        <div className='flex flex-col gap-4 mt-5'>
          {question.options.map((q, index) => (
            <div key={index} className='gap-4 flex items-center'>
              <input
                type='radio'
                className='mt-3 h-5 w-5'
                id={'question' + index}
                name='question'
                onChange={onChange}
                value={index}
                checked={index == defaultValue}
              />
              <label htmlFor='age1' className='text-5xl'>
                {q}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Question
