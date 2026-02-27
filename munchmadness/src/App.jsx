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
          <h3>Streak:</h3>
        </div>

        <div>
          <h1>Munch.org</h1>
        </div>
        
        <div>
          <h2>Current Stats</h2>

          <div class="logContainer"> 

            <div class="vertSpread">
              <p>Calories:</p>
            </div>
            
            <div class="goals">
              <h4>Goals</h4>
              <p>Calories:</p>
              <p>Protein:</p>
              <p>Carbohydrates:</p>
              <p>Fat:</p>
            </div>

          </div>
          
          <div class="logContainer"> 
            <p>Protein:</p>
            <p>Carbohydrates:</p>
            <p>Fat:</p>
          </div>
          
        </div>

        <div>
          <h2>Track Meal</h2>

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

        <div class="logButton">
          <button>Eat!</button>
        </div>

      </div>
  )
}

export default App
