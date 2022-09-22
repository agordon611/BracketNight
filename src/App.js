import './App.css';
import Bracket from "./Components/Bracket.js";
import Navbar from "./Components/Navbar.js";
import Popup from 'reactjs-popup';
import {useState} from 'react';

function App() {

  const [open, setOpen] = useState(true);
  const closeModal = () => setOpen(false);

  return (
    <div className="App">
      <Navbar />
      <Bracket />
      <Popup open={open} onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          Bracket Night
        </div>
      </Popup>
    </div>
    
  );
}

export default App;
