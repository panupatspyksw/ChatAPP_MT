'use client'

const BackDrop = ({ reference, onclick }: any) => {
  return (
    <div
      onClick={onclick}
      ref={reference}
      className='min-h-screen w-full fixed bg-black bg-opacity-50 z-40'
    ></div>
  )
}

export default BackDrop
