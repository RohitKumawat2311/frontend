"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from '../../../../../node_modules/next/navigation';

function userData() {
    const { id } = useParams();
    const [data, setData] = useState([])
    
    useEffect(async () => {
        let data = await fetch(`http://localhost:5000/user/${id}`)
        data = await data.json();
        setData(data)
        console.log(">>>>>", data)
    },[])
  return (
    <>
    <div>User Details</div>

    <h2>Name: {data.name}</h2>
    <h2>Email: {data.email}</h2>
    <h2>Age: {data.age}</h2>
    <h2>Created: {data.createdAt}</h2>
    </>
  )
}

export default userData