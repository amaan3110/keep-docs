import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({data,reference}) => {
  return (
    <div>
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} className='relative w-56 h-64 bg-zinc-700/50 rounded-[30px] overflow-hidden py-5 px-7 hover:cursor-pointer'>
            <FaFileAlt color='#fff' size='1.5rem'/>
            <p className='text-sm font-medium leading-none text-white tracking-tight mt-4'>{data.desc}</p>
            <div className='w-full h-14 absolute bottom-0 left-0 bg-sky-200 flex items-center justify-between px-7'>
                <h5 className='text-sm'>{data.filesize}</h5>
                <span className='w-7 h-7 bg-white flex items-center justify-center rounded-full'>
                {
                  data.close ? <IoIosClose size='1.3rem'/> : <FiDownload/>
                }
                </span>
            </div>       
        </motion.div>
    </div>
  )
}

export default Card