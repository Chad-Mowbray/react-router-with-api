import './App.css';
import Homepage from './components/Homepage';
import Nav from './components/Nav'
import Listview from './components/Listview';
import Detailview from './components/Detailview'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="articles/" element={<Listview />}/>
          <Route path="articles/:id" element={<Detailview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
