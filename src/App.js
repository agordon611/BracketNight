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
  const [team1Open, setTeam1Open] = useState(false);
  const [data, setData] = useState();
  const closeModal = () => {
    setOpen(false);
    setTeam1Open(true);
  } 

  const closeTeam1Modal = () => {
    setTeam1Open(false);
  }
  

  // Read Data
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const db_data = snapshot.val();
      if (db_data !== null) {
        setData(db_data);
      }
    });
  }, []);

  // console.log(data['data']['categories']['pasta']['intro']['image']);

  if (data) {
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
            <img src={data['data']['categories']['pasta']['intro']['image']} alt="pasta" width="100" height="100"></img>
            <p>
            In this game, you are given 8 items in a particular category.
            Today's theme is Pasta. Talk with your friends
            (or by yourself if you have none) about which pasta
            should be crowned the best! Have fun! 
            </p>
          </div>
        </Popup>
        <Popup open={team1Open} onClose={closeTeam1Modal}>
          <div className="modal">
            <button className="close" onClick={closeTeam1Modal}>
              &times;
            </button>
            <h1>Team 1</h1>
            
          </div>
        </Popup>
      </div>
      
    );
  } else {
    return <div></div>
  }
  
}

export default App;
