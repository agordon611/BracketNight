import './App.css';
import Bracket from "./Components/Bracket.js";
import Navbar from "./Components/Navbar.js";
import Popup from 'reactjs-popup';
import { useState, useEffect } from 'react';
import {db} from "./firebase";
import { ref, onValue, set } from "firebase/database";
import { uid } from "uid";

function App() {

  const [open, setOpen] = useState(true);
  const [topics, setTopics] = useState();
  const closeModal = () => setOpen(false);

  // Read Data
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setTopics(data);
      }
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Bracket />
      <Popup open={open} onClose={closeModal}>
        <div className="modal">
          <button className="close" onClick={closeModal}>
            &times;
          </button>
          <h1>Welcome to Bracket Night</h1>
          <p>
          In this game, you are given 8 items in a particular category.
          Today's theme is Drinking Games. Talk with your friends
          (or by yourself if you have none) about which drinking game
          should be crowned the best! Have fun! 
          </p>
        </div>
      </Popup>
    </div>
    
  );
}

export default App;
