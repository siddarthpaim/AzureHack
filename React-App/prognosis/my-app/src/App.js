import React from 'react';
import logo from './prognosis.png';

class App extends React.Component {
  
  render() {
    return (
      
      <div>
        <h1>                    Medical Prognosis </h1>
        <img src={logo} alt="Prognosis"   />
        <h2>Preventing Heart Attack and other serious medical conditions</h2>
      


        <form>
          <p>
            <label>
              Name  (as per records)
    <input type="text" name="name" />

            </label>
          </p>
          <p>
          <label>
            Age  (in Years)
            <input type="text" name="Age" />
            
          </label>
          </p>
          <p>
          <label>
            Blood Pressure (BP)
          <input type="text" name="BP" />

          </label>
          </p>
          <p>
          <label>
         Blood Oxygen Level (SPO2)
         </label>
          <input type="text" name="SPO2" />
          </p>
          <p>
          <label>
          Electrocardiography (ECG)
          <input type="text" name="ECG" />
         
          </label>
          </p>
          <p>
          <label>
            Heart Rate (in bpm)
          <input type="text" name="Heart Rate" />
          </label>
          </p>
          <p>
          <label>
            By Clicking Send you acknowledge to share your data for Analysis
            <p></p>
          <input type="submit" value="Send" />
          </label>
          </p>
          

        </form>
        <p>Developed by Siddarth Pai</p>
      </div>

      

    );
  }
}
export default App;