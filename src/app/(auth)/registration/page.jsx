'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const registrationPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const MyDataFb = async (data) => {
        const { name, email, password, image } = data;

        console.log(data);

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: image,
            callbackURL: "/",
        },
            {
                onRequest: (ctx) => {
                    alert("Registration in progress...");
                },
                onSuccess: (ctx) => {
                    alert("Registration successful!");
                },
                onError: (ctx) => {
                    alert(ctx.error.statusText);
                },
            }

        );
        console.log("Registration submitted:", res, 'error is', error);
    }

    return (
        <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">

                <div className="p-8">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-extrabold text-slate-800">Registration Page</h1>
                        <p className="text-slate-500 mt-2">Please provide us with your details to create an account</p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(MyDataFb)}>
                            <div>
                                <label className='  block text-sm font-semibold text-slate-700 mb-2'>Your Name</label>
                                <input
                                    {
                                    ...register('name', { required: 'Please enter your name' })
                                    }
                                    type="text" placeholder="Enter your name" className="w-full text-black px-4 py-3 rounded-xl border outline-none transition-all duration-200 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                                <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>

                            </div>
                            <div>
                                <label className='  block text-sm font-semibold text-slate-700 mb-2'>Photo URL</label>
                                <input
                                    {
                                    ...register('image', { required: 'Please enter a photo URL' })
                                    }
                                    type="text" placeholder="Enter photo URL" className="w-full text-black px-4 py-3 rounded-xl border outline-none transition-all duration-200 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                                <p className="text-red-500 text-sm mt-1">{errors.image?.message}</p>
                            </div>
                            <div>
                                <label className='  block text-sm font-semibold text-slate-700 mb-2'>Your Email</label>
                                <input
                                    {
                                    ...register('email', { required: 'Please enter your email' })
                                    }
                                    type="text" placeholder="Enter your email" className="w-full text-black px-4 py-3 rounded-xl border outline-none transition-all duration-200 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                                <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
                            </div>
                            <div>
                                <label className='  block text-sm font-semibold text-slate-700 mb-2'>Password</label>
                                <input
                                    {
                                    ...register('password', { required: 'Please enter a password' })
                                    }
                                    type="text" placeholder="Enter your password" className="w-full text-black px-4 py-3 rounded-xl border outline-none transition-all duration-200 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                                <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
                            </div>
                            <button type='submit' className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Registration Now
                            </button>
                        </form>
                    </div>
                    <div className='flex flex-col text-center gap-3 mt-6'>
                        <div>
                            Sign in with social accounts!
                        </div>
                        <div className='flex w-full justify-center text-3xl gap-4 mb-6'>
                            <div onClick={async () => {
                                const data = await authClient.signIn.social({
                                    provider: "google",
                                });
                                console.log(data);
                            }}>
                                <FcGoogle className="cursor-pointer" />
                            </div>
                            <div onClick={async () => {
                                const data = await authClient.signIn.social({
                                    provider: "github",
                                });
                                console.log(data);
                            }}>
                                <FaGithub className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="  text-center border-t border-slate-100  ">
                        <p className="text-slate-600 text-sm">
                            New user? <Link href={'/login'} className="font-bold text-blue-600 hover:underline">Login your account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default registrationPage;