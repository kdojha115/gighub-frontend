import React, { useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { IoDocument } from "react-icons/io5";
import { MdCalendarMonth, MdCurrencyRupee } from "react-icons/md";
import "./PostCard.css";

const PostCard = () => {

    const [showDropDown, setShowDropDown] = useState(false);

    const handleClick = () => {
        setShowDropDown(!showDropDown);
    };

    return (
        <div>
            <div className="flex card ">
                <div>
                    <div>
                        <a  href="https://kpbsolution.godaddysites.com/">
                            <img className="h-18" src="https://img1.wsimg.com/isteam/ip/de3e954c-cff8-49a9-ab6e-1eb19357453c/final%20logo.png/:/rs=w:207,h:200,cg:true,m/cr=w:207,h:200/qt=q:95" alt="" />
                        </a>
                    </div>
                    <div className="aggrement">
                        <IoDocument className="text-2xl "/>
                        <a className="btn" href="/">Aggrement</a>
                    </div>
                </div>
                
                <div className="flex w-full  justify-between">
                    <div className="content w-full flex flex-col justify-between ml-0">
                        <div>
                            <div className="">
                                <div className="contentDetail justify-center items-center flex">
                                    {/* <BsPersonWorkspace className="rainbow "/> */}
                                    <h1 className="changableContent ">Looking for Developer</h1>
                                </div>
                            </div>
                            <div className="contentIcons mt-4 justify-between px-6 flex">
                                <div className="contentDetail ">
                                    <MdCurrencyRupee className="rainbow " />

                                </div>
                                <div className="contentDetail">
                                    <MdCalendarMonth className="rainbow "/>

                                </div>
                                <div className="contentDetail">
                                    <FaLocationDot className="rainbow "/>

                                </div>
                                <div className="contentDetail">
                                    <BsCalendarDate className="rainbow "/>

                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="btn flex items-center">Add to My Work</button>
                        </div>
                    </div>

                    <div className="flex addButton flex-col ">
                        <div className="dropdown">
                            <HiDotsVertical className="dots" onClick={handleClick}></HiDotsVertical> 
                            <div className="dropdown-content">
                                {showDropDown && (
                                    <div>
                                        <p className="list ">
                                            Delete
                                        </p>
                                        
                                        
                                    </div>
                                    
                                    
                                )}
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PostCard;