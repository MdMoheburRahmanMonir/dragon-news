'use client';
import { authClient } from "@/lib/auth-client";
import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {

    const { data } = authClient.useSession() 
    return (
        <div className=" text-black container mx-auto px-10 h-[50px] flex items-center justify-between">
            <div></div>
            <div>
                <ul className="flex items-center gap-4">
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/about">
                        <li>About</li>
                    </Link>
                    <Link href="/career">
                        <li>Career</li>
                    </Link>
                    <Link href="/privacy-policy">
                        <li>PrivacyPolicy</li>
                    </Link>
                    <Link href="/terms-of-use">
                        <li>TermsOfUse</li>
                    </Link>
                </ul>
            </div>
            <div className="flex items-center justify-center gap-2">
                <p>{data?.user?.name}</p>
                {!data?.user?.image ? <CgProfile className="w-10 h-10 rounded-full"></CgProfile> : <img referrerPolicy="no-referrer"      src={data?.user?.image} alt="Profile" className="w-10 h-10 rounded-full" />}
                {!data?.user
                    ? <button className="bg-mauve-800 text-white font-bold py-2 px-4 rounded">
                        <Link href="/login">Login</Link>
                    </button>
                    : <button className="bg-mauve-800 text-white font-bold py-2 px-4 rounded">
                        <Link href="/login" onClick={async () => await authClient.signOut()}>logout</Link>
                    </button>}
            </div>
        </div>
    );
};

export default Navbar;