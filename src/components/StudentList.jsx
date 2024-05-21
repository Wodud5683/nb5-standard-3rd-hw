import React from 'react';

function StudentList({ students }) {
  return (
    <ul>
      {students.map((student, index) => (
        <li key={index}>
          {student.name} ({student.age}세) - {student.grade}등급
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
