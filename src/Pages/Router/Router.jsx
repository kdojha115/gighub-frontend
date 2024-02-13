import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNewJob from "../../Component/AddNewJob/AddNewJob";
import AddJob from "../AddJob/AddJob";
import BusinessPage from "../BusinessPage/BusinessPage";
import FirstPage from "../FirstPage/FirstPage";

const Router = () => {
    return (

        <div>
            <Routes>
                <Route path="/login" element={ <FirstPage/>  } />
                <Route path="/" element={ <BusinessPage/>} />
                <Route path="/addjob" element={ <AddJob/>} />
                <Route path="/createnewjob" element={ <AddNewJob/>} />
            </Routes>
        </div>

    )
}

export default Router;