import React, { useRef, useState } from 'react'

export default function UseRef() {
    const [name, setName] = useState('adito')
    const refElement = useRef('');
    console.log(refElement);
    const Reset =()=>{
        setName("");
        refElement.current.focus();    // input element  focus 
    }
     const handleInput =() =>{
        refElement.current.style.color="red"
        refElement.current.value="soumen";
     }
  return (
    <div>

        <h1>use Ref use </h1>
        <h2>{name}</h2>
        <input type="text" ref={refElement} value={name} onChange={(e)=>{setName(e.target.value)}} />
        <button onClick={Reset}>Reset</button>
        <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}
