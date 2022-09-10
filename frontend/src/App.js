// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Header from './components/Header';

function App() {
  return (
   
      <Router>
        <div className="App">

      <Header/>
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/add" element={<AddEdit />} />

          <Route exact path="/edit/:id" element={<AddEdit />} />
        </Routes>
        </div>
      </Router>


    
  );
}

export default App;
