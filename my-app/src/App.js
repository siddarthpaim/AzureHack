import logo from './prognosis.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
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
            Submit
          <input type="submit" value="submit" />
          </label>
          </p>
          

        </form>
        <p>Developed by Siddarth Pai</p>
      </div>

      
         Welcome to Medical Prognosis App
        </a>
      </header>
    </div>
  );
}

export default App;
