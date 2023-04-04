import { useState } from 'react'
import FilterableProductTable from './components/FilterableProductTable'
import './App.css'
import data from './data'

function App() {

  return (
    <div className="app">
      <FilterableProductTable products={data} />
    </div>
  )

}

export default App
