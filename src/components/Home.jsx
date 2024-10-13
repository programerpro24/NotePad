import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { AddToPastes, UpdateToPastes } from '../redux/pasteSlice';



const Home = () => {
const [title, setTitle]=useState('');
const [value, setValue]=useState('');
const [searchParams, setSearchParams]=useSearchParams();
const pasteId=searchParams.get("pasteId");
const dispatch=useDispatch();
const allPastes=useSelector((state)=>state.paste.pastes);


useEffect(()=>{
  if(pasteId){
    const paste =allPastes.find((p)=>p._id===pasteId)
    setTitle(paste.title);
    setValue(paste.content);
    
  }

}, [pasteId])



function createPaste(){
if(title){
const paste={
  title:title,
  content:value,
  _id:pasteId || Date.now().toString(36),
  createAt:new Date().toISOString(),
}


  if(pasteId){
    dispatch(UpdateToPastes(paste));
  }
  else {
    dispatch(AddToPastes(paste));
  }
   //After creation or updation 
   setTitle('');
   setValue('');
   setSearchParams({});
}
}
  return (


   <div> 
    <div className='flex justify-center gap-1'>
        <input
        className='mt-[50px] w-[600px] h-[50px] rounded-tl-md rounded-bl-md pl-6 outline-none border-none'
        type='text'
        placeholder='Enter The Title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />

        <button 
        onClick={createPaste}
        className='bg-orange-400 w-[100px] h-[50px] mt-[50px] rounded-tr-md rounded-br-md'>
           {
             pasteId ? "Update" : "Create" 
           }
        </button>
    </div>
    <div className='flex justify-center'>
      <textarea 
      className='m-5 w-[700px] outline-none border-none p-[20px] rounded-xl'
      value={value}
      placeholder='Enter Text Here'
      onChange={(e)=>setValue(e.target.value)}
      rows={20}
      >

      </textarea>
    </div>
    </div>
  )
}

export default Home
