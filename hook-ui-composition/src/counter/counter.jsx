import { useCounter } from "./use-counter";

export default function Counter() {
  const { counter, increase, decrease, reset } = useCounter();

  return (
    <>
      <CounterUI
        counter={counter}
        increase={increase}
        decrease={decrease}
        reset={reset}
      />
    </>
  );
}
