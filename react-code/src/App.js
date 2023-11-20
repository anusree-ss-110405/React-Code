import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AxiosGet from './Day 8/AxiosGet';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      {/* <ul>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul> */}
        {/* <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
        </Routes>
         */}
         <AxiosGet/>
      </BrowserRouter>
    </div>
  );
}

export default App;
