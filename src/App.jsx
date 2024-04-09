
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Berlin from './Berlin';
import Rome from './Rome';
import Switzerland from './Switzerland';
function App() {
  return (
    <div className="app">
      <nav className='all'>
        <div>
            <Link to='/Home'>HOME</Link>
            </div>
            <ul>
            <li>
            <Link to='/Berlin'>Berlin</Link></li>
            <li>
            <Link to='/Rome'>Rome</Link></li>
            <li>
            <Link to='/Switzerland'>Switzerland</Link></li>
            </ul>
            </nav>
            <main className='all'>
            <Routes>
            <Route path='/*' element={
                <Home
              />}/> 
              <Route path='/Berlin' element={
                <Berlin
              />}/> 
              <Route path='/Rome' element={
                <Rome
              />}/>
               <Route path='/Switzerland' element={
                <Switzerland
              />}/>
              
              
            </Routes>
            </main>
  </div>
  );
}

export default App;
