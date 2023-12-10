import React, { useState } from "react";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

const Popup = () => {

  const [text, setText] = useState('');

  const formatBytes = (bytes) => {
    const kilobyte = 1024;
    const megabyte = kilobyte * 1024;
  
    if (bytes < kilobyte) {
      return bytes + ' B';
    } else if (bytes < megabyte) {
      return (bytes / kilobyte).toFixed(2) + ' KB';
    } else {
      return (bytes / megabyte).toFixed(2) + ' MB';
    }
  };

  const saveData = async () => {
    try{

      const textSize = text.length;
      const formattedTextSize = formatBytes(textSize);

      const docRef = await addDoc(collection(firestore, 'myData'),{
        text,
        textSize: formattedTextSize,
        timestamp: serverTimestamp(),
      });

      setText('');

      alert("data saved successfully");
      window.location.reload();
    } catch(error){
      console.error('error', error);
    }
  };

  return (
    <div className="w-[21vw] h-[31vh] bg-slate-200 rounded-xl flex flex-col p-5 absolute right-14 bottom-32">
      <label className="font-semibold">Add Your Keeps !</label>
      <textarea
        value={text}
        onChange={(e)=> setText(e.target.value)}
        cols="30"
        rows="10"
        className="focus:outline-none ring-1 rounded-sm p-2 resize-none mt-1"
      ></textarea>
      <button
        onClick={saveData}
        className="ring-1 font-semibold w-[50%] rounded-md p-1 ml-[25%] mt-2"
      >
        Save
      </button>
    </div>
  );
};

export default Popup;
