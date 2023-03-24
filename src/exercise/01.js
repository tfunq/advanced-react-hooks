// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => ({
  ...state,
  ...(typeof action === 'function' ? action(state) : action),
})

function Counter({initialCount = 0, step = 1}) {
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const {count} = state
  // const increment = () => setState({count: count + step})

  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
    count2: initialCount,
  })
  const {count, count2} = state
  const increment = () =>
    setState(currentState => ({count: currentState.count + step}))
  const increment2 = () => setState({count2: count2 + step})
  return (
    <>
      <button onClick={increment}>{count}</button>
      <button onClick={increment2}>{count2}</button>
    </>
  )
}

function App() {
  return <Counter />
}

export default App
