import React from 'react'
import './App.css'
import SecondClassWork from './components/Class2'
import  FirstClassWork  from './components/Class1'
import Class3Work from './components/Class3'
import Test from './components/Test'
import Class4Work from './components/Class4'


const App = () => {
  return (
    <div>
      {/* <FirstClassWork /> */}
      {/* <SecondClassWork /> */}
      {/* <Class3Work /> */}
      <Class4Work />
      {/* <Test /> */}
    </div>
  )
}

export default App