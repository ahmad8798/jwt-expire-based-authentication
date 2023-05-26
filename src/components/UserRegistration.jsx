import React, { useState } from 'react'
import axios from 'axios'
const UserRegistration = () => {
    const[formValues,setFormValues] = useState({name:"",email:"",password:""})


    const handleChange = (e)=>{
      console.log(`form values before `,formValues)
      setFormValues({...formValues,[e.target.name]:e.target.value})
      console.log(`form values after`,formValues)
    }

    const sendRequest = async()=>{
      try{
        const{name,email,password} = formValues
        const response = await axios.post('http://localhost:7000/registration',{name,email,password})
        console.log(response)
      }catch(err){
        console.log(err)
      }
    }
    const handleSubmit = (e)=>{
      e.preventDefault()
      sendRequest()
    }
  return (
    <>
    <div className="container" style={{display:'flex'}}>
      <div className="form1" style={{position:'relative',left:'25rem'}}>
      <form onSubmit={handleSubmit}>
          <label>Name:</label>
            <input onChange={handleChange} value={formValues.name} name='name' type="text" />
            <br />
            <label>Email:</label>
             <input onChange={handleChange} value={formValues.email} name='email' type="text" />
            <br />
            <label>Password:</label>
            <input onChange={handleChange} value={formValues.password} name='password' type="text"/>
            <br />
            <button type='submit'>register</button>
        </form>
      </div>
     
    </div>
       
    </>
  )
}

export default UserRegistration
