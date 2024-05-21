import { useState } from "react";
import FilterButtons from "./components/FilterButtons";
import StudentList from "./components/StudentList";

function App() {
  const initialStudents = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  const [filteredStudents, setFilteredStudents] = useState(initialStudents);

  const filterByAge = (minAge) => {
    setFilteredStudents(initialStudents.filter(student => student.age >= minAge));
  };

  const filterByGrade = (grade) => {
    setFilteredStudents(initialStudents.filter(student => student.grade === grade));
  };

  const resetFilter = () => {
    setFilteredStudents(initialStudents);
  };

  return (
    <div>
      <h1>학생 목록</h1>
      <FilterButtons
        filterByAge={filterByAge}
        filterByGrade={filterByGrade}
        resetFilter={resetFilter}
      />
      <StudentList students={filteredStudents} />
    </div>
  );
}

export default App;
