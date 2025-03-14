
import React from 'react'


const Dashboard = () => {
  return ( 
    <div className='bg-[#fbf8f2] flex  w-[100vw]'>
       <section className='h-[100vh]  flex flex-col justify-between items-center w-[60px] px-10'>
       <div className='mt-40'>
        <p className="text-gray-600 font-semibold [writing-mode:vertical-rl] text-2xl opacity-70">my mind</p>
       </div>
       <div className=' mb-5 '>
        <ul className='flex flex-col gap-3'>
            <li className='text-[#f88e5a] text-2xl'><i class="ri-gift-line"></i></li>
            <li className='text-2xl opacity-70'><i class="ri-moon-fill"></i></li>
            <li className='text-2xl opacity-70'><i class="ri-bard-fill"></i></li>
            <li className='text-2xl opacity-70'><i class="ri-grid-fill"></i></li>
            <li className='text-2xl opacity-70'><i class="ri-settings-5-fill"></i></li>
        </ul>
       </div>
       </section>

    {/* ----rightside header---- */}

    <section className='rightsection w-[91%]'>
        
{/* rightside buttons    */}
    <div className="flex items-center justify-end gap-7 bg-[#fbf8f2] shadow-md mt-3">
         <button className='flex items-center space-x-2 px-4 py-1 rounded-full font-medium bg-white text-gray-600 opacity-60 hover:bg-orange-500 hover:text-white hover:opacity-100 transition duration-30'><p className='opacity-40'>Unlock features</p></button>
         <button className='text-xl opcacity-80'>Everything</button>
         <button className='text-xl opacity-55'>Spaces</button>
         <button className='text-xl opacity-55'>Serendipity</button>
     </div>
    
    <div className="flex items-center justify-between w-[95vw] h-24 px-6 bg-[#fbf8f2]">
      {/* Search Input */}
      <div className="flex items-center w-[100%]">
        <input
          type="text"
          placeholder="Search my mind..."
          className="ml-3  bg-transparent font-italic outline-none border-none text-gray-400 italic text-6xl focus:outline-none placeholder-gray-400"
        />
      </div>
     </div>
     <hr style={{border:"0.1px solid black"}} className="opacity-10" />
  
    </section>



    </div>
  )
}

export default Dashboard

