import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';



const Button = styled.button`
  color: green;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
  max-width:30%;
  

  &:hover {
    background-color: green;
    color:white;
    

  }
`;
const Input = styled.input`
  color: green;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
  outline:none;

  &:hover {
    // border:none;
    border-bottom:1px solid blue;
    
  }
`;
const Box = styled.div`
  display:flex;
  flex-direction:column;
 
  margin:auto;
  justify-content:center;   
  align-items:center;
  &:hover {
    

  }
`;
const Select = styled.select`
    min-width:15vw;  
    color: green;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid green;
    border-radius: 3px;


  &:hover {
    

  }
`;


const UserForm = () => {
  const [user , setUser] = useState({
    username:"",
    age:"",
    address:"",
    married:false,
    department:"",
    salary:""

  });
  const [userd , setUserd] = useState(
    {username:"",
    age:"",
    address:"",
    married:false,
    department:"",
    salary:""})

  const handleChange = (e)=>{
    
    const {name , value , type, checked} = e.target;
    
    setUser(
      {...user,
      [name] : type=== "checkbox"? checked : value
    }
    )
    // console.log(user)
  }
  const handleForm =  async ()=>{
    let res1 = await fetch("https://my-heroku-cool-project1.herokuapp.com/users" , {
      method:"POST",
      body:JSON.stringify(user),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    let res2 = await res1.json();
    setUserd(res2)
  }

  return (
    <>
    
      <Box>
      <div>UserForm</div>
      {/* <Box>{user}</Box> */}
      <Input name ="username"  onChange={handleChange} type="text" placeholder='Enter the name' />
      <Input name ="age" onChange={handleChange} type="number" placeholder='Enter the age' />
      <Input name ="address"  onChange={handleChange} type="address" placeholder='Enter the address' />
      <Input name = "salary"  onChange={handleChange} type="salary" placeholder='Enter the salary' />
      <Select name='department' onChange={handleChange} placeholder="Department">
          <option value="">Department</option>
          <option value="bio">Biology</option>
          <option value="it">IT</option>
          <option value="cs">CS</option>
      </Select>
      
      <div>
        <label htmlFor="married">Marital Status</label>
      <Input name='married' onChange={handleChange} id='married' type="checkbox" placeholder='Enter the salary' />
      </div>
      
      <Button onClick={handleForm} type='submit'>Submit</Button>
      </Box>
      <Box>
      <h1>Name : {userd.username}</h1>
      <h3> Age : {userd.age}</h3>
      <h3>Marital Status : {userd.married}</h3>
      <h3>Salary : {userd.married}</h3>
      <p>Address : {userd.address}</p>
      </Box>
    </>
  )
}

export {UserForm}