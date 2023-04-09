import './App.css'
import Main from './components/Main';
import Navbar from './components/Navbar';
import PageNotFound from './PageNotFound';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path='/contact' element= { <Contact /> } />
          <Route path='/' element={ <Main />} />
          <Route path='*' element={ <PageNotFound /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
