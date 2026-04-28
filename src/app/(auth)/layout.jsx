import Navbar from '@/Components/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            {children}
        </>
    );
};

export default layout;