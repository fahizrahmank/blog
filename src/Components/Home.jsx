import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { Context } from './Context';

const Home = () => {
const  inputRef = useRef(null);
const data =useContext(Context)

const { text , setText } = data;

    const navigate = useNavigate();
    const handle=(e)=>{
      e.preventDefault()
      
      navigate('List');
    
    }

const handleSubmit = () =>{
  const Heading = inputRef.current.heading.value;
      const Blog = inputRef.current.blog.value;
      const id = Math.floor(Math.random()*1000)
      console.log([Heading,Blog,id]);
  setText([...text,{Heading,Blog,id}])


}
  return (
    <div >
    <form ref={inputRef} onSubmit={handle}>
<label>Heading : </label>
<input type="text" name='heading' />
<br />
<label>Blog : </label>
<input type="text" name='blog' />
<br /><br /><br />
<button onClick={handleSubmit} >SaVE</button>
    </form>
    </div>
  )
}

export default Home
