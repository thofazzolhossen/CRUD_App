import React, { useEffect, useState } from 'react';
import "./add.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';



const Add = () => {

    const users = {
        fname:"",
        lname:"",
        email:"",
        password:"",
    }

    const [user,setUser] = useState(users);
    const navigate = useNavigate();
    const inputHandler =(e)=>{
        const {name,value} = e.target;
        setUser({...user, [name]:value});

    }

    const submitForm = async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8001/api/create", user)
        .then((response)=>{
            toast.success(response.data.msg, {position: "top-right"})
            navigate("/");
        }).catch(error => console.log(error));
    }



  return (
    <div className='addUser'>
        <Link to={"/"} style={{color:"rgb(79, 252, 136)", textDecoration:"none"}}>Back</Link>
        <h3>Add New User </h3>
        <form onSubmit={submitForm} className='addUserForm'>
            <div className='inputGroup'>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text' onChange={inputHandler} id='fname' name='fname' autoCapitalize='off' placeholder='First Name' />
            </div>

            <div className='inputGroup'>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' onChange={inputHandler} id='lname' name='lname' autoCapitalize='off' placeholder='Last Name' />
            </div>

            <div className='inputGroup'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' onChange={inputHandler} id='email' name='email' autoCapitalize='off' placeholder='Email' />
            </div>

            <div className='inputGroup'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' onChange={inputHandler} id='password' name='password' autoCapitalize='off' placeholder='password' />
            </div>

            <div className='inputGroup'>
                    <button type='submit'>ADD USER</button>
            </div>
        </form>
    </div>
  )
}

export default Add