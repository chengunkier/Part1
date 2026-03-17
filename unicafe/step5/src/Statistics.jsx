import StatisticLine from './StatisticLine'

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const all = good + neutral + bad

  if (all === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <div>
      <h2>statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average.toFixed(1)} />
      <StatisticLine text="positive" value={positive.toFixed(1) + " %"} />
    </div>
  )
}

export default Statistics