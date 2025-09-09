"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from '../../../../../node_modules/next/navigation';

function userData() {
    const { id } = useParams();
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    
    useEffect(async () => {
        let user_data = await fetch(`http://localhost:5000/user/${id}`)
        user_data = await user_data.json();
        setData(user_data)
        setName(user_data.name)
        setEmail(user_data.email)
        setAge(user_data.age)
        console.log(">>>>>", data)
    },[])


    const updateUser = async () => {
       let response = await fetch(`http://localhost:5000/user/${id}`,{
                        method:"PUT",
                        headers: {
                            "Content-Type": "application/json",
                          },
                        body: JSON.stringify({name,email,age: Number(age),})
                    });
                    response = await response.json();
                    console.log('response>>>>>>', response)
    }

  return (
    <>
    <div>User Update</div>

    <input type='text' onChange={(e) => {setName(e.target.value)}} placeholder="Enter Name" value={name} name='name' className='border-2' />
    <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" value={email} name='email' className='border-2' />
    <input type='number' onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" value={age} name='age' className='border-2' />
    <button onClick={updateUser}>Update User</button>
    </>
  )
}

export default userData