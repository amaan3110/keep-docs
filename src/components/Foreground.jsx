import React, { useEffect, useRef, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase';
import Card from './Card'
import Popup from './Popup';
import { FaPen } from "react-icons/fa";
import { Modal } from '@mui/material';

const Foreground = () => {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ref = useRef(null)

  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{

        const querySnapshot = await getDocs(collection(firestore, 'myData'));
        const newData = [];
        querySnapshot.forEach((doc) => {
          const { text, textSize } = doc.data();
          newData.push({
            id: doc.id,
            desc: text,
            filesize: textSize,
            close: true,
          });
        });

        setData(newData);
      }catch(error){
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div ref={ref} className='fixed w-full h-screen p-7 flex gap-5 flex-wrap'>
      {
        data.map((item,index)=>(
          <Card data={item} reference={ref}/>
        ))
      }
      <div className='absolute bottom-14 right-14'>
        <button onClick={handleOpen} className='border text-white flex items-center justify-center gap-4 py-3 px-5 rounded-xl bg-slate-400 hover:shadow-xl'>
          <FaPen size="1.1rem"/> <span className='text-lg font-semibold'>New</span>
        </button>
        <Modal open={open} onClose={handleClose}>
            <Popup/>
        </Modal>
      </div>
    </div>
  )
}

export default Foreground