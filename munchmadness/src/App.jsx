import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const streakVal = "";
  
  const calGoal = "";
  const proGoal = "";
  const carbGoal = "";
  const fatGoal = "";

  const currCal = "";
  const currPro = "";
  const currCarb = "";
  const currFat = "";



  return (
      <div>
        <div class="streak">
          <p>Streak:</p>
        </div>

        <div>
          <h1>Munch.org</h1>
        </div>
        
        <div>
          <p>Current Stats</p>
          <p>Calories:</p>
          <p>Protein:</p>
          <p>Carbohydrates:</p>
          <p>Fat:</p>
        </div>

        <div>
          <p>Track Meal</p>

          <div class="logContainer">
         
            <div>
              <p>Calories:</p>
              <input></input>
              <p>Carbohydrates:</p>
              <input></input>
            </div>

            <div>
              <p>Protein:</p>
              <input></input>
              <p>Fat:</p>
              <input></input>
            </div>

          </div>
        </div>
      </div>
  )
}

export default App
