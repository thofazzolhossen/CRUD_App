import React, { useEffect, useState } from 'react';
import "../components/adduser/add.css";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';

const Edit = () => {
        const users ={
                fname: "",
                lname: "",
                email: "",
        }
        const {id} = useParams();
        const navigate = useNavigate();
        const [user,setUser] = useState(users);

        const inputChangeHandler =(e) =>{
                const {name,value} = e.target;
                setUser({...user, [name]:value});
                console.log(user); 
        }


        useEffect(()=>{
                axios.get(`http://localhost:8001/api/getOne/${id}`)
                .then((response)=>{
                        setUser(response.data)
                        //console.log(response);
                })
                .catch((error)=>{
                        console.log(error);
                })
        },[id])


        
        const submitFormData  = async(e) =>{
                e.preventDefault(); 
                await axios.put(`http://localhost:8001/api/update/${id}`, user)
                .then((response)=>{
                        toast.success(response.data.msg, {position: "top-right"})
                        navigate("/")
                }).catch(error => console.log(error))
             
        }
       

             

  return (
    <div className='addUser'>
        <Link to={"/"} style={{color:"rgb(79, 252, 136)", textDecoration:"none"}}>Back</Link>
        <h3>Update User </h3>
        <form onSubmit={submitFormData} className='addUserForm'>
            <div className='inputGroup'>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text' value={user.fname} onChange={inputChangeHandler} id='fname' name='fname' autoCapitalize='off' placeholder='First Name' />
            </div>

            <div className='inputGroup'>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' value={user.lname} onChange={inputChangeHandler} id='lname' name='lname' autoCapitalize='off' placeholder='Last Name' />
            </div>

            <div className='inputGroup'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' value={user.email} onChange={inputChangeHandler} id='email' name='email' autoCapitalize='off' placeholder='Email' />
            </div>

            

            <div className='inputGroup'>
                    <button type='submit'>UPDATE USER</button>
            </div>
        </form>
    </div>
  )
}

export default Edit;