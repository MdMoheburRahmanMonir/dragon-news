"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { CgFigma } from "react-icons/cg";



export default function LoginPage() {
    const [errormsg, setErrorMsg] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const MySubmitFn = async (data) => {

        const { email, password, checkbox } = data;
        const { data: signInData, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: checkbox,
            callbackURL: "/",
        });
        console.log("Sign-in data:", signInData);
        console.log("Sign-in error:", error);
        setErrorMsg(error?.message);
    };

    return (
        <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">

                <div className="p-8">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-extrabold text-slate-800">Login</h1>
                        <p className="text-slate-500 mt-2">Return to your dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit(MySubmitFn)} className="space-y-6">

                        <div>
                            <label className='block text-sm font-semibold text-slate-700 mb-2'>Email</label>
                            <input placeholder='Please enter your Email'
                                {
                                ...register('email', { required: 'Please enter your email' })
                                }
                                className={`w-full text-black px-4 py-3 rounded-xl border outline-none transition-all duration-200 ${errors.email ? "border-red-500 bg-red-50" : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}`}
                                type="email" />
                            <p className="text-red-500 text-xs mt-1">{errors.email && 'Enter your email plz'} </p>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                            <input
                                {...register("password", {
                                    required: "Please enter your password",
                                    minLength: { value: 6, message: "Please enter at least 6 characters" },
                                    maxLength: { value: 20, message: "Please enter no more than 20 characters" },
                                })}
                                type="password"
                                placeholder="Enter your password"
                                className={`w-full text-black px-4 py-3 rounded-xl border outline-none transition-all duration-200 ${errors.password ? "border-red-500 bg-red-50" : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    }`}
                            />
                            {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
                        </div>

                        <p className="text-red-500 text-xs font-bold"> {errormsg} </p>
                        <div className="flex items-center justify-between">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    {
                                    ...register('checkbox')
                                    }
                                    type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                                <span className="text-sm text-slate-600">Remember me</span>
                            </label>
                            <button type="button" className="text-sm font-semibold text-blue-600 hover:text-blue-700">Forgot your password?</button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95"
                        >
                            Login
                        </button>
                    </form>
                    <div className='flex flex-col text-center gap-3 mt-6'>
                        <div>
                            Login with social accounts!
                        </div>
                        <div className='flex w-full justify-center text-3xl gap-4'>
                            <div onClick={async () => {
                                await authClient.signIn.social({
                                    provider: "google",
                                });
                            }}>
                                <FcGoogle className="cursor-pointer" />
                            </div>
                            <div onClick={async () => {
                                await authClient.signIn.social({
                                    provider: "github",
                                });
                            }}>
                                <FaGithub className="cursor-pointer" />
                            </div> 
                            <div onClick={async () => {
                                await authClient.signIn.social({
                                    provider: "facebook",
                                });
                            }}>
                                <FaFacebook className="cursor-pointer" />
                            </div> 
                        </div>
                    </div>

                    <div className="  text-center border-t border-slate-100 pt-6">
                        <p className="text-slate-600 text-sm">
                            New user? <Link href={'/registration'} className="font-bold text-blue-600 hover:underline">Create an account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}