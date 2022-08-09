import { useState } from 'react'
export function useCounter() {

    const [counter, setCounter] = useState(0)

    function increase() {
      if(counter < 5) {
        setCounter(counter + 1)
      }
    }

    function decrease() {
      if(counter > -5) {
        setCounter(counter - 1)
      }
    }

    function reset() {
      setCounter(0)
    }

    return {
        counter, increase, decrease, reset
    }

}