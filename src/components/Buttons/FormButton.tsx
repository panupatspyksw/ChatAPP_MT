'use client'

const FormButton = ({ references, onclick, text }: any) => {
  return (
    <button
      ref={references}
      onClick={onclick}
      className='text-4xl text-white bg-slate-800 px-14 py-2 pb-3 rounded-full hover:scale-[.9] duration-300'
    >
      {text}
    </button>
  )
}

export default FormButton
