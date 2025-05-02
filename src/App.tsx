import React from 'react'
import './App.css'

type Range = {
  id: string
  values: number[]
}

type PropsRange = {
  values: Range['values']
  backgroundColor: string
  scaleRange?: boolean
}

const Range = ({ values, backgroundColor, scaleRange }: PropsRange) => {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const rangeLength = scaleRange
    ? max - min
    : max
  return (
    <div className='Range'>
      {values.map(value => {
        const scaledValue = value - min
        const opacity = scaleRange
          ? scaledValue / rangeLength
          : value / rangeLength
        const style = {
          backgroundColor,
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
  {
    id: '50 - 100',
    values: [
      50,
      50 + ((75 - 50) / 2),
      75,
      75 + ((100 - 75) / 2),
      100,
    ],
  },

  // * 5 - 7
  // * 1 - 10,000


]

function App() {
  return (
    <div>
      {ranges.map(range => {
        return (
          <React.Fragment key={range.id}>
            <>
              <Range key={range.id}
                values={range.values}
                backgroundColor='#09f'
              />
              <Range key={range.id}
                values={range.values}
                backgroundColor='#09f'
                scaleRange
              />
            </>
          </React.Fragment>
        )
      })}

    </div>
  )
}

export default App
