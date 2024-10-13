import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remoetFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId){
    dispatch(remoetFromPastes(pasteId));
  }


  return (

    <div className='flex flex-col items-center'>
      <input 
      className=' bg-slate-700 text-white mt-[30px] w-[500px] h-[45px] rounded border-none outline-none p-[10px]'
      type="text"
      placeholder='Search Here'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      />

 <div className='flex flex-col items-center'>
       {
        filteredData.length>0 &&
        filteredData.map(
          (paste)=>{
            return(
              <div className=' text-white bg-slate-700 border border-black w-[500px] mt-[20px] rounded-md ' key={paste?._id}>
                <div className='flex flex-col pl-[5px] pt-[10px]'>
                {paste.title}
                </div>

                <div className='flex flex-col pl-[5px]'>
                  {paste.content}
                </div>
               

                <div className=' mb-[10px] flex flex-row gap-[10px] ml-[400px] mt-[20px]'>
                  <button>
                  <a href={`/?pasteId=${paste?._id}`}>
                  <FontAwesomeIcon icon={faEdit} />
                  </a>
                  </button>
                  
                  <button>
                    <a href={`/pastes/${paste?._id}`}>
                    <FontAwesomeIcon icon={faEye} />              
                    </a>
                  </button>
                  
                  <button onClick={()=>handleDelete(paste?._id)}>
                  <FontAwesomeIcon icon={faTrash} />
                  </button>
                  
                  <button onClick={()=>{
                    navigator.clipboard.writeText(paste?.content);
                    toast.success("Copy Successfully");
                  }}>
                     <FontAwesomeIcon icon={faCopy} />
                  </button>                
                </div>
                </div>
              
            
            )
          }
        )
       }

      </div>
    </div>
  )
}

export default Paste