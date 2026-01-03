import './App.css'
import Navbar from './Navbar.jsx'
import Course from './Courses/Course.jsx'
import Coure from './Coure.jsx'
import html from './assets/html.jpg'
import LogData from './Component/LogData.jsx'
import Home from './Component/Home.jsx'
import ChangeText from './Component/ChangeText.jsx'
function App() {
  return(
    <>
  <Navbar name="HTML" price="199"image={html}/>
  <Navbar name="Css" price="299"image={html}/>
  <Navbar name="JavaScript" price={499}image={html}/><br />
  <br/>
  <br/>
  <LogData/><br/>
  <Home />
  <ChangeText />
  
    </>
);
    }

    Navbar.defaultProps = {
      name : "html is easy",
      price : "399",
      image : html
    }
export default App

