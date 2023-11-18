import './App.css';
import {BrowserRouter,Routes,Route,Router,Link} from react-route-DOM;
import Home from './Day 7/Home';
import About from './Day 7/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li></li>
        <li></li>
        <li></li>
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
