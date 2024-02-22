
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
function App() {
  return (
    <div className="app">
      <nav className='all'>
            <Link to='/Home'>HOME</Link>
            </nav>
            <main className='all'>
            <Routes>
              <Route path='/*' element={
                <Home
              />}/>
            </Routes>
            </main>
  </div>
  );
}

export default App;
