import React, { useState } from 'react'

function useCounter() {

    const [count ,setCount] =useState(0);

      const Increment =()=>{
        setCount(count +1);
      }
      const Decrement =()=>{
        setCount(count -1);
      }
  return [count,Increment,Decrement]  // custom hook formula
}

export default useCounter