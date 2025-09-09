"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from '../../../../../node_modules/next/navigation';

function userAdd() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')


    const addUser = async () => {
       let response = await fetch(`http://localhost:5000/user`,{
                        method:"Post",
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
    <div>User Add</div>

    <input type='text' onChange={(e) => {setName(e.target.value)}} placeholder="Enter Name" value={name} name='name' className='border-2' />
    <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" value={email} name='email' className='border-2' />
    <input type='number' onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" value={age} name='age' className='border-2' />
    <button onClick={addUser}>Add User</button>
    </>
  )
}

export default userAdd