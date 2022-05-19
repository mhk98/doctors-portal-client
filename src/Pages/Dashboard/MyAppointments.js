import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    useEffect( () => {
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data));
        }
    }, [user])
    return (
        <div>
            <h2>My Appointments: {appointments.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>

        {
            appointments.map((a, index) =>
                
                <tr>
                    <th>{index+1}</th>
                    <td>{a.patientName}</td>
                    <td>{a.date}</td>
                    <td>{a.slot}</td>
                    <td>{a.treatment}</td>
                </tr>)
        }
      
      {/* <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr> */}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointments;