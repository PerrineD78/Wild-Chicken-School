
import ChickenCard from './components/ChickenCard';
import chickenData from "../chickenTab.json";

import './App.css'

function App() {
  const teachers = chickenData.chickenTab.filter((teacher) => teacher.position === "Teacher");

  const students = chickenData.chickenTab.filter((student) => student.position === "Student");


  return (
    <div>
      <section className="teachers">
        <h2>Équipe pédagogique</h2>
        {teachers.map((teacher) => 
          <ChickenCard
            key={teacher.id}
            imgSrc={teacher.imgSrc}
            name={teacher.name}
            role={teacher.position}
            description={teacher.biography}
          />
        )}
      </section>

      <section>
        <h2>Camarades</h2>
          {students.map((student) => 
          <ChickenCard
            key={student.id}
            imgSrc={student.imgSrc}
            name={student.name}
            role={student.position}
            description={student.biography}
          />
        )}
      </section>
    </div>
  )
}

export default App;
