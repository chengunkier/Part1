const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}


// I refactor the application so that it still works.
const Part = (props) => {
  return (
    <p> 
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
/*here instead of passing six different variables 
< content {part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/> */
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}
export default App