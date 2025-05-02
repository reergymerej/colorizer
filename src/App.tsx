import React from 'react'
import './App.css'

type Range = {
  id: string
  values: number[]
}

type PropsRange = {
  values: Range['values']
  backgroundColor: string
  relativeScale?: boolean
}

const scale = (value: number, min: number, max: number): number => {
  const rangeLength = max - min
  const scaledValue = value - min
  return scaledValue / rangeLength
}

const Range = ({ values, backgroundColor, relativeScale }: PropsRange) => {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const scaleMin = relativeScale ? min : 0
  return (
    <div className='Range'>
      {values.map(value => {
        const opacity = scale(value, scaleMin, max)
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
                relativeScale
              />
            </>
          </React.Fragment>
        )
      })}

    </div>
  )
}

export default App
