import React, { useState } from 'react';
import {data} from './helper'
function App() {


  const ToggleItem = ({title,id}) => {
    const [toggleThisElement, setToggleThisElement] = useState(false);
    const [toggleThisFail, setToggleThisFail] = useState(false);
    return(
      <div 
        key={id} 
        className="bg-white rounded-lg flex justify-center items-center aspect-square w-full h-full relative overflow-hidden cursor-pointer p-4  "
        onClick={() => {setToggleThisFail(false); setToggleThisElement((prev) => !prev) }}
        onContextMenu={(e)=> { e.preventDefault(); setToggleThisElement(false); setToggleThisFail((prev) => !prev) }}
        
      >
        <div className='z-10 text-2xl text-center font-semibold whitespace-pre-wrap'>{title}</div> 
        <div className={'bg-[#b1fcd0] w-full h-full  absolute ' + (toggleThisElement  ? '  block' : ' hidden') }></div>
        <div className={'bg-[#595959] w-full h-full  absolute ' + (toggleThisFail  ? '  block' : ' hidden')}></div>
      </div>
    )
  }
 
  return (
    <div className="App bg-black">
      <div className=' aspect-square w-[100vh]  mx-auto grid grid-cols-5  gap-4'>
        {data &&
        data.map((item,index)=>{
          return(
            <ToggleItem id={item.id} title={item.title} />
          )
        })}
      </div>

    </div>
  );
}

export default App;
