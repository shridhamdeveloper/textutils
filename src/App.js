import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {

  const[mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark kmode has been enabled', 'success')
      document.title = 'Textutils - Dark Mode'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light kmode has been enabled', 'success')
      document.title = 'Textutils - Light Mode'
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Textutils"/> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;