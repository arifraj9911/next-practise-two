"use client"
import React from 'react';

const SignUp = () => {


    const handleSubmit = async(e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.image.value;
        const type = e.target.type.value;

        const newUser = {name,email,password,image,type};

        const res = await fetch('http://localhost:3000/api/auth/signup/new-user',{
            method:'POST',
            body:JSON.stringify(newUser),
            headers:{
                'content-type':'application/json'
            }
        })

        console.log(res);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className=' flex justify-center mt-6 flex-col items-center '>
                <h4 className="text-xl mb-4 text-center">Create Account</h4>
                <div className='flex w-1/4 rounded-md  p-4 flex-col gap-6'>
                    <input type="text" name="name" placeholder='your name...' className='bg-gray-100 p-2 outline-none rounded-md' id="" />
                    <input type="email" name="email" placeholder='your email...' className='bg-gray-100 p-2 outline-none rounded-md' id="" />
                    <input type="password" name="password" placeholder='your password...' className='bg-gray-100 p-2 outline-none rounded-md' id="" />
                    <input type="text" name="image" placeholder='your image url...' className='bg-gray-100 p-2 outline-none rounded-md' id="" />
                    <select className='bg-gray-100 p-2 outline-none rounded-md' name="type" id="">
                        <option value="admin">Admin</option>
                        <option value="moderator">Moderate</option>
                        <option value="member">Member</option>
                    </select>
                    <button type='submit' className='bg-green-600 text-white py-2 rounded-md'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;