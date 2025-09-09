"use client"
import React, { useEffect, useState } from 'react'
import Link from '../../../node_modules/next/link';

function userManagment() {

  const [data, setData] = useState([]);

  useEffect(async () => {
    let data = await fetch('http://localhost:5000/user');
    data = await data.json();
    setData(data);
    console.log(data)
  },[])

  return (
    <>
        <div className='text-center'>
            <h1>User Managment</h1>
            <div className='flex justify-center align-middle'>
                <table className='table-auto border-collapse border border-gray-400 max-w-220'>
                  <thead>
                    <tr>
                    <th className="border border-gray-400 px-4 py-2">name</th>
                    <th className="border border-gray-400 px-4 py-2">email</th>
                    <th className="border border-gray-400 px-4 py-2">age</th>
                    <th className="border border-gray-400 px-4 py-2">created</th>
                    <th className="border border-gray-400 px-4 py-2">action</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                        data.map((item) => {
                          return (
                            <tr>
                              <td className="border border-gray-400 px-4 py-2">{item.name}</td>
                              <td className="border border-gray-400 px-4 py-2">{item.email}</td>
                              <td className="border border-gray-400 px-4 py-2">{item.age}</td>
                              <td className="border border-gray-400 px-4 py-2">{item.createdAt}</td>
                              <td className="border border-gray-400 px-4 py-2">
                              <Link href={`/user/userdetails/${item._id}`}>View</Link><br></br>
                                <Link href={`/user/userupdate/${item._id}`}>Update</Link><br></br>
                                <button>Delete</button>
                              
                              </td>
                            </tr>
                              )
                            })
                          }
                          </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default userManagment