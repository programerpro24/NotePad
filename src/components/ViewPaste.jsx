import React from 'react'
import {useParams, useSearchParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';



const ViewPaste = () => {

  const {id}=useParams();
  const allPastes=useSelector((state)=>state.paste.pastes);
  const paste=allPastes.filter((p)=>p._id===id)[0];

  return (

    <div> 
    <div className='flex justify-center gap-1 '>
        <input
        className=' bg-slate-400 mt-[50px] w-[700px] h-[50px] rounded-md pl-6 outline-none border-none'
        type='text'
        placeholder='Enter The Title'
        value={paste.title}
        onChange={(e)=>setTitle(e.target.value)}
        disabled
        />

    </div>
    <div className='flex justify-center'>
      <textarea 
      className=' bg-slate-400 m-5 w-[700px] outline-none border-none p-[20px] rounded-xl'
      value={paste.content}
      placeholder='Enter Text Here'
      onChange={(e)=>setValue(e.target.value)}
      rows={20}
      disabled
      
      >

      </textarea>
    </div>
    </div>

  )
}

export default ViewPaste