import ChickenCard from './components/ChickenCard'
import chickendatas from '../chickenTab.json'
import './App.css'

function App() {
console.log(chickendatas)
  return (
    <>
    <section>
      {chickendatas.chickenTab.filter((chicken)=>{
        return chicken.position === "Teacher"
      }).map((chicken)=>{
        return <ChickenCard 
        key={chicken.id}
        imgSrc={chicken.imgSrc}
        name={chicken.name}
        role={chicken.position}
        description={chicken.biography}
      />
    })}
    </section>
      ==============================================
    <section>
      {chickendatas.chickenTab.filter((chicken) => (chicken.position === "Student")
      ).map((chicken) => (
      <ChickenCard 
        key={chicken.id}
        imgSrc={chicken.imgSrc}
        name={chicken.name}
        role={chicken.position}
        description={chicken.biography}
      />)
    )}
    </section>

    </>
  )
}

export default App
