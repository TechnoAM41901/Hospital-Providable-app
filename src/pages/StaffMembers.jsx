// src/pages/StaffMembers.jsx
import React, { useState } from 'react';
import '../styles/StaffMembers.css'; // Add necessary styles

const staffData = {
  Nurses: [
    { id: 1, name: 'Nurse Joy', contact: '123-456-7890' },
    { id: 2, name: 'Nurse Jackie', contact: '098-765-4321' },
  ],
  Surgeons: [
    { id: 1, name: 'Dr. Strange', contact: '123-456-7890' },
    { id: 2, name: 'Dr. Grey', contact: '098-765-4321' },
  ],
  WardBoys: [
    { id: 1, name: 'John Doe', contact: '123-456-7890' },
    { id: 2, name: 'Jane Doe', contact: '098-765-4321' },
  ],
  HospitalTechnicians: [
    { id: 1, name: 'Tech Tom', contact: '123-456-7890' },
    { id: 2, name: 'Tech Tim', contact: '098-765-4321' },
  ],
  HospitalCEOs: [
    { id: 1, name: 'CEO Amar', contact: '123-456-7890' },
    { id: 2, name: 'CEO Dhanashri', contact: '098-765-4321' },
  ],
};

const StaffMembers = () => {
  const [selectedStaff, setSelectedStaff] = useState('Nurses');
  const [staffList, setStaffList] = useState(staffData[selectedStaff]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedStaff(selectedValue);
    setStaffList(staffData[selectedValue]);
  };

  return (
    <div className="staff-members">
      <h2>Staff Members</h2>
      <label htmlFor="staffSelect">Select Staff Type: </label>
      <select id="staffSelect" value={selectedStaff} onChange={handleChange}>
        {Object.keys(staffData).map((staffType) => (
          <option key={staffType} value={staffType}>
            {staffType}
          </option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffMembers;
