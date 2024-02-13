import React from "react";
import { useNavigate } from 'react-router-dom';
import "./FirstPage.css";

const FirstPage = () =>{

    const navigate = useNavigate();

    const handleLogin = () => {
            
        navigate('/');
        
    };

    const handleAddJob = () => {
            
        navigate('/addjob');
        
    };

    return (

        
        <div className="table w-full h-full">
            <div className="box">
                <div className="flex flex-col">
                    <div className="w-full flex  logoCompany">
                        <img src="https://img1.wsimg.com/isteam/ip/de3e954c-cff8-49a9-ab6e-1eb19357453c/final%20logo.png/:/rs=w:207,h:200,cg:true,m/cr=w:207,h:200/qt=q:95" alt="" />
                    </div>

                    <div className="heading">
                        <h1>One Stop Solution</h1>
                    </div>
                </div>
                <div className=" btncontent blue w-full h-full">
                        
                    <div className=" ">

                        <button className="text-white-700 btnstyle " onClick={handleAddJob} >Business</button>

                    </div>

                    <div className=" ">

                        <button className="btnstyle1 " onClick={handleLogin}>Vendors </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default FirstPage;