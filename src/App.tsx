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

const Range = ({ values, backgroundColor, relativeScale = true }: PropsRange) => {
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
          <div className="Value" key={value}>
            <div className="bg" style={style} />
            <span>{value}</span>
          </div>
        )
      })}
    </div>
  )
}

const generateRange = (min: number, max: number): number[] => {
  const length = max - min
  const mid = Math.round(min + (length / 2))
  const step = (mid - min) / 2
  return [
    min,
    min + step,
    mid,
    mid + step,
    max,
  ]
}

const ranges: Range[] = [
  {
    id: '1 - 100',
    values: generateRange(1, 100),
  },
  {
    id: '50 - 100',
    values: generateRange(50, 100),
  },
  {
    id: '* 5 - 7',
    values: generateRange(5, 7),
  },
  {
    id: '1 - 10,000',
    values: generateRange(1, 10000),
  },
  {
    id: '666 - 999',
    values: generateRange(666, 999),
  }
]

function App() {
  return (
    <div>
      {ranges.map(range => {
        return (
          <React.Fragment key={range.id}>
            <>
              <Range key={range.id + 'relative'}
                values={range.values}
                backgroundColor='#09f'
              />
              {/* <Range key={range.id}
                values={range.values}
                backgroundColor='#09f'
                relativeScale={false}
              /> */}
            </>
          </React.Fragment>
        )
      })}

    </div>
  )
}

export default App
