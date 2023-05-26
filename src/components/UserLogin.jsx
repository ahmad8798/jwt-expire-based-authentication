import axios from 'axios'
import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'

const UserLogin = () => {
    const[formValues,setFormValues] = useState({email:'',password:''})
    const handleChange = (e) => {
        console.log(`form values before `,formValues)
        setFormValues({...formValues,[e.target.name]:e.target.value})
        console.log(`form values after`,formValues)
    }
    const sendRequest = async()=>{
        try{
            const{email,password} = formValues
            const response = await axios.post('http://localhost:7000/login',{email,password})
            localStorage.setItem('token',response.data.token )
        }catch(err){
            console.log(err)
        }

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        sendRequest()
    }
    const removeJwtOnExp = ()=>{
        const token = localStorage.getItem('token')
        if(token){
            const decoded = jwtDecode(token)
            if(decoded.exp < Date.now()/1000){
                localStorage.removeItem('token')
                console.log('session has expired')
                }
                }
    }
useEffect(()=>{
   const timeInterval = setInterval(()=>{
        removeJwtOnExp()
        
        
   },1000)
   return ()=>{
    clearInterval(timeInterval)
   
   }
},[])

  return (
 <>
    <div className="form" style={{position:'relative',left:'25rem'}}>
      <form onSubmit={handleSubmit}>
            <label>Email:</label>
             <input onChange={handleChange} value={formValues.email} name='email' type="text" />
            <br />
            <label>Password:</label>
            <input onChange={handleChange} value={formValues.password} name='password' type="text"/>
            <br />
            <button type='submit'>Login</button>
        </form>
      </div>
 </>
  )
}

export default UserLogin
