const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad

     // Requirement: If no feedback is given, show only this message
    if (all === 0) {
        return (
            <div>
              <h2>Statistics</h2>
              <p>No feedback given</p>
            </div>
        )
    }

    const average = (props.good - props.bad) / all
    const positive = (props.good / all) * 100
    


   return (
    <div>
        <h2>statistics</h2>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
    </div>
   )
  }
  
  export default Statistics