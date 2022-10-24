import React, { useState } from 'react';
import {data} from './helper'
function App() {
  const [success, setSuccess] = useState('0')
  const [fail, setFail] = useState('0')
  const handleClick = (e,id) => {
    if (e.type === 'click' ){
      setSuccess(id)
      setFail('0')
      console.log(id)
    } 
  };
  const handleRightClick = (e,id) => {
    e.preventDefault();
    if (e.type === 'contextmenu' ){

      setFail(id)
      setSuccess('0')
      console.log(id)
    } 
  };
 
  return (
    <div className="App bg-black">
      <div className=' aspect-square w-[100vh]  mx-auto grid grid-cols-5  gap-4'>
        {data &&
        data.map((item,index)=>{
          return(
            <div 
              key={item.id} 
              className="bg-white rounded-md flex justify-center items-center aspect-square w-full h-full relative overflow-hidden cursor-pointer p-8  "
              onClick={(e) => handleClick(e,item.id)}
              onContextMenu={(e)=>handleRightClick(e,item.id)}
              
            >
              <div className='z-10 text-2xl text-center font-semibold'>{item.title}</div> 
              <div className={'bg-[#b1fcd0] w-full h-full  absolute ' + (item.id === success ? '  block' : ' hidden') }></div>
              <div className={'bg-[#595959] w-full h-full  absolute ' + (item.id === fail ? '  block' : ' hidden')}></div>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
