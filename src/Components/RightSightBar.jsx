'use client';
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const RightSightBar = () => {
    const googleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);
    }
    const githubSignIn = async () => {
        await authClient.signIn.social({
            provider: 'github'
        })
    }
    const facebookSignIn = async () => {
        await authClient.signIn.social({
            provider: 'facebook'
        })
    }
    return (
        <div className='flex flex-col gap-4'>
            <button onClick={googleSignIn} className="btn bg-white rounded-md hover:bg-gray-200 text-black border-[#e5e5e5]">
                <FcGoogle ></FcGoogle >
                Login with Google
            </button>
            <button onClick={githubSignIn} className="btn bg-black rounded-md hover:bg-white hover:text-black text-white border-black">
                <FaGithub></FaGithub>
                Login with GitHub
            </button>
            <button onClick={facebookSignIn} className="btn text-black rounded-md hover:bg-gray-200   border-blue-600">
                <FaFacebook></FaFacebook>
                Login with Facebook
            </button>
        </div>
    );
};

export default RightSightBar;