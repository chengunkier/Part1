const Statistics = (props) => {
  const { good, neutral, bad } = props

  const total = good + neutral + bad
  const all = total
  const average = (good - bad) / total
  const postive = (good / total) * 100

 return (
   <div>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>all{all}</p>
      <p>average{average}</p>
      <p>positive{postive}</p> 
  </div>
 )
}

export default Statistics