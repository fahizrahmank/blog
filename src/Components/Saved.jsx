import React, { useContext } from 'react'
import { Context } from './Context'
import { useParams } from 'react-router-dom'

const Saved = () => {
  const data = useContext(Context)

  // destructure the text
  const {text} = data

  const {id } = useParams();
  const para={id}
 
  const filtered = data.text.filter((item)=>{
    return item.id==para.id
  })
  return (
    <div>
<h1> {filtered.map((item)=>{
  return <div key = {id}> 
  <h1>{item.Heading}</h1>
  <p>{item.Blog}</p>
   </div>
})}</h1>

    </div>
  )
}

export default Saved
