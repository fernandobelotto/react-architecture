import React from 'react'

export default function CounterUI({
    counter,
    increase,
    decrease,
    reset,
}) {
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>reset</button>
    </>
  )
}
