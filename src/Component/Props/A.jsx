import React, { useState } from 'react'
import B from './B'
export default function A() {
    const[data,setData] =useState([
        { 
          id: "1",
          title: "JSON:API paints my bikeshed!",
          body: "The shortest article. Ever."
    },
    {
        id: "2",
        title: "JSON:API ",
        body: "article. Ever."
    }

    ])
  return (
    <div>
        {/* parent to child data pass and use props pass, title pass multiple child pass */}
  <B data={data} title="All data "/> 
    </div>
  )
}
