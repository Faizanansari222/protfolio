import Image from 'next/image'
import react from './assites/React-Symbol.png'
import next from './assites/nextjs-icon.png'
import node from './assites/node-js-736399_640.png'
import expo from './assites/Expo.png'

function Working() {
  return (
    <div className="py-2 ">
        <div className='w-[80%] pt-8 py-1  border-t m-auto'></div>
        <div>
<h1 className="mb-3 text-gray-600 flex justify-center text-lg font-medium">Working On This Technology</h1>      
</div>
<div className='flex justify-around  w-[90%] m-auto gap-10  items-center'>
        
    <div className='grid grid-cols-2 center w-full p-5 sm:grid-cols-4 md:grid-cols-4 items-center gap-5'>
    <Image className='w-[150px]' src={react} alt="" width={200} height={200}/>
    <Image className='w-[150px]' src={next} alt="" width={200} height={200}/>
    <Image className='w-[150px]' src={node} alt="" width={200} height={200}/>
    <Image className='w-[150px]' src={expo} alt="" width={200} height={200}/>
    </div>
   
</div>
    </div>
  )
}

export default Working

