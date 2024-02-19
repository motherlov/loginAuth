import React from 'react'

export default function B(props) { //  props parameter // B({props,title}) arry destructure
    const data=props.data // props pass
    const title=props.title // title pass  
  return (
    <div>
        <h3>{title}</h3>
        {data.map((obj) =>(
            <div>
        <h1>{obj.id}</h1>
        <h1>{obj.body}</h1>
        <h1>{obj.title}</h1>
        </div>
        ))}
    </div>
  )
}
