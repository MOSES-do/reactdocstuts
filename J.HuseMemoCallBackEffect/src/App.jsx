import { useState, useMemo, useCallback } from 'react'
import './App.css'

function SortedList({ list, sortFunc }) {
  console.log("SortedList render")
  const sortedList = useMemo(() => {
    console.log("Running sort")
    return [...list].sort(sortFunc());
  }, [list, sortFunc])
  return <div>{sortedList.join(", ")}</div>
}

function App() {

  //useMemo and useCallback

  const [names] = useState(["John", "Paul", "Geaorge", "Ringo"]);

  //1. When performing comples calculations | 2. When creating an object or array

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const countTotal = useMemo(() => count1 + count2, [count1, count2]);


  const sortFunc = useCallback(() => (a, b) => a.localeCompare(b) * -1, []);

  return (
    <div className="app">

      <div>Names: {names.join(", ")}</div>
      <SortedList list={names} sortFunc={sortFunc} />
      <button onClick={() => setCount1(prev => prev + 1)}>Count: {count1}</button>
      <button onClick={() => setCount2(prev => prev + 1)}>Count: {count2}</button>

      <div>{countTotal}</div>

    </div>

  )

}

export default App


