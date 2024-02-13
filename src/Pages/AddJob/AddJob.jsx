import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import AllJobs from "../../Component/AllJobs/AllJobs";
import "./AddJob.css";

const AddJob = () => {
    const navigate = useNavigate();

    const handleNewJob = () => {
        navigate("/createnewjob");
    };


    return (
        <div>
            <div>
                <div>
                <Button variant="info" onClick={handleNewJob}>Create New Job</Button>{' '}
                </div>
            </div>


            <div>
                <AllJobs/>
            </div>
        </div>
    );
};

export default AddJob;
