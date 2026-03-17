const Header = (props) => {
  return <h1>{props.course}</h1>
}

// const Content = (props) => {
//   return (
//     <div>
//       <p> {props.part1} {props.exercises1} </p>
//       <p> {props.part2} {props.exercises2} </p>
//       <p> {props.part3} {props.exercises3} </p>
//     </div>
//   )
// }
/*Refactor the Content component so that it does not render any names, only 
  renders three Part components of which each renders the name and number of exercises of one part.*/

  // 1. Define the Part component to handle the actual rendering of the text
const Part = (props) => {
  return (
    <p> {props.part} {props.exercises} </p>
  )
}

// 2. Refactor the Content component to render the three Part component
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}
 const App =() => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1= {part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App