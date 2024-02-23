
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Berlin from './Berlin';
import Rome from './Rome';
function App() {
  return (
    <div className="app">
      <nav className='all'>
            <Link to='/Home'>HOME</Link>
            <Link to='/Berlin'>Berlin</Link>
            <Link to='/Rome'>Rome</Link>
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
            </Routes>
            </main>
  </div>
  );
}

export default App;
