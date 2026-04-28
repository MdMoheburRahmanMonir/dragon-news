import React from 'react';
import Header from "@/Components/Header";
import Marque from "@/Components/Marque";
import Navbar from "@/Components/Navbar";

const layout = ({ children }) => {
    return (

        <div className="min-h-full flex flex-col">
            <Header></Header>
            <Marque></Marque>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default layout;