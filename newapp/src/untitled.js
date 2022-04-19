import {React, useState } from 'react'

export default function App() {
  return (
    <div className="counter">
     <h1>React Counter</h1>
        <span className="counter__output"></span>
        <div className="btn__container">
        <button className="control__btn" >+</button>
        <button className="control__btn">-</button>
        <button className="reset">Reset</button>
    </div>
  </div>

  )
}
