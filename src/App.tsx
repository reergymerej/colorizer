import './App.css'

type Range = {
  id: string
  values: number[]
}

type PropsRange = {
  values: Range['values']
}
const Range = ({ values }: PropsRange) => {
  const max = Math.max(...values)
  return (
    <div className='Range'>
      {values.map(value => {
        const opacity = value / max
        const style = {
          backgroundColor: '#09f',
          opacity,
        }
        return (
          <div className="Value">
            <div className="bg" style={style} />
            <span>{value}</span>
          </div>
        )
      })}
    </div>
  )
}

const ranges: Range[] = [
  {
    id: '1 - 100',
    values: [
      1,
      25,
      50,
      75,
      100,
    ],
  },

  // * 1 - 100
  // * 50 - 100
  // * 5 - 7
  // * 1 - 10,000


]

function App() {
  return (
    <div>
      {ranges.map(range => {
        return (
          <Range key={range.id}
            values={range.values}
          />
        )
      })}

    </div>
  )
}

export default App
