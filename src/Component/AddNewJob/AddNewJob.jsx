import React from 'react';
import './AddNewJob.css';
export default function AddNewJob() {
return (
    <div>
        <div class="container">
            <form class="mainform" id="signup1" method="post">
                <div class="fields">

                    <div class="Fname">
                    <label>Job Title *</label>
                    <input type="text" name="fname" id="fname" placeholder="job title" required />
                    </div>

                    <div class="Lname">
                    <label>Location *</label>
                    <input type="text" name="lname" id="lname" placeholder="current location" required />
                    </div>

                    <div class="phone">
                    <label>Salary *</label>
                    <input type="number" name="sal" id="sala" placeholder="salary in LPA" required />

                    </div>
                    <div class="start_date">
                    <label>Start Date *</label>
                    <input type="date" placeholder="Start Date" name="sdate" id="stdate" required />
                    </div>

                    <div class="end_date">
                    <label>End Date *</label>
                    <input type="date" name="edate" id="endate" placeholder="end date" required />
                    </div>

                    <div class="submit1">
                    <button type="submit" class="submitbtn text-bg-success" id="submitButton" >Save & Continue</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
)
}