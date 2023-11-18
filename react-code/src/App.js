import './App.css';
import {BrowserRouter,Routes,Route,Router,Link} from react-route-DOM;
import Home from './Day 7/Home';
import About from './Day 7/About';
import Navbar from './Day 7/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
        <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
