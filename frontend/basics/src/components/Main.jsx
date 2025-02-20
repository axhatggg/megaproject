import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
// import { getStudent } from './blockChainUtils';

const Main = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [textData, setTextData] = useState("");
    const [retrievedCredentials, setRetrievedCredentials] = useState('');

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/check-auth", { withCredentials: true });
                setIsAuthenticated(response.data.authenticated);
            } catch {
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);
    const handleLogout = async () => {
        try {
          const res = await axios.get("http://localhost:8000/api/v1/user/logout", { withCredentials: true });
          
          alert(res.data.message);
          window.location.reload(true);
          
        } catch (err) {
          console.log(err);
          alert("Logout failed");
        }
      };
    
    //   const handleGetStudent = () => {
    //     getStudent(studentAddress, setRetrievedCredentials);
    //     console.log(retrievedCredentials);
    //   };
    

  return (
    <div className='flex justify-around items-center h-screen '>
        <div className='bg-slate-300 absolute left-0 w-1/2 h-screen flex flex-col gap-5 items-center justify-center bg-custom-image7'>
        <h1 className='text-4xl text-center font-extrabold mb-36 text-white shadow-slate-50'> Get student's certificates </h1>
        <textarea
                    name="text"
                    id=""
                    className="bg-gray-600 w-1/2 p-2 text-black "
                    value={textData}
                    onChange={(e) => setTextData(e.target.value)}
                    placeholder="Enter student's address here..."
        ></textarea>
        <button
            // onClick={handleGetStudent}
            className='mt-3 p-5 w-1/4 bg-gray-900 text-orange-500 font-bold border-none cursor-pointer'
        >
            Submit
        </button>
    </div>
            {!isAuthenticated ? (
                <div className='flex flex-col gap-8 items-center justify-center bg-cyan-900
                 h-screen absolute right-0 w-1/2 bg-custom-image5'>
                    {/* <button
                        onClick={() => {
                            window.location.href = "/register";
                        }}
                        className='mt-3 p-5 w-1/2 bg-blue-400 text-white border-none cursor-pointer rounded-3xl'
                    >
                        Register
                    </button> */}
                    <button
                        onClick={() => {
                            window.location.href = "/login";
                        }}
                        className='mt-3 p-5 w-1/2 bg-black text-orange-500 font-bold text-2xl border-none cursor-pointer absolute bottom-48'
                    >
                        Login
                    </button>
                
                </div>
            ) : (
                <div className='flex flex-col gap-8 items-center justify-center bg-cyan-900
                 h-screen absolute right-0 w-1/2 bg-custom-image5' >
                    <button
                        onClick={() => {
                            window.location.href = "/uploadFiles";
                        }}
                        className='mt-3 p-5 w-1/2 bg-sky-950 shadow-lg shadow-black text-white border-none cursor-pointer rounded-3xl'
                    >
                        Add Certificate
                    </button>
                    <button
                        onClick={handleLogout}
                        className='mt-3 p-5 w-1/2 bg-red-500 shadow-lg shadow-red-950 text-white border-none cursor-pointer rounded-3xl'
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
  )
}

export default Main
