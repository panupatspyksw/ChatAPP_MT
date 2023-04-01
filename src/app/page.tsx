import Link from 'next/link';
export default function Page() {
  return <div className='min-h-[200vh] bg-slate-400'>
    <div className='min-h-screen flex justify-center align-middle  items-center'>
    <div className='bg-white shadow-2xl rounded-2xl p-12'>
      <h1 className='text-8xl'>TOUCH ME YOU</h1>
      <Link className='py-3 px-10 text-3xl mx-auto block w-fit mt-4 rounded-full shadow-lg bg-rose-500 hover:scale-[.9] duration-300 text-white' href="/getstarted">GET STARTED</Link>
    </div>
    
    </div>
    <div className='m-24 p-12 bg-white shadow-2xl'>
          <h1 className='text-8xl text-center'>Character Card Show</h1>
    </div>
  </div>;
}
