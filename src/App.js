import React from 'react';
import './App.css';
import BoardList from './components/BoardList';
import CreateBoard from './components/CreateBoard';
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [boards, setBoards] = useState(
    [
      {
        title: 'Delia\'s',
        owner: "delia",
        board_id: null
      },

      {
        title: 'Adelaide\'s',
        owner: "adelaide",
        board_id: null
      },
    ]
  )

  const [selectedBoard, setSelectedBoard] = useState(null)
  

  //function to get all boards at start of app
  //useEffect to get them all loaded the first time (with extra [])
  const getAllOptions = () => {
    const options = boards.map(board =>
      // <option value={board.title} selected={isSelected(board.title)}>{board.title}</option>
      //not needed  if boards === selectedBoards then selected =true
      <option value={board.title}>{board.title}</option>
    );
    return options;
  }

  const updateBoardList = boards => {
    setBoards(boards)
  }

  return (
    <div className="App">
      <header>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTs4k73tsmQGuUInH-lVvYy0S7yOhO4z3hQ&usqp=CAU" className="App-logo" alt="sandy beach" /> */}
        <h1>{selectedBoard} Inspiration Board</h1>
      </header>

      <main>
        <BoardList getAllOptions={getAllOptions} setSelectedBoard={setSelectedBoard} />
        <CreateBoard onUpdateBoardList={updateBoardList} />
      </main>

    </div>
  );

  {/*   
function Form() {
  const [newBoard, setNewBoard] = useState({title: "", owner: ""})

function addNewBoard(evt) {
  const newBoard = evt.target.value;
  setState({
    ...state,
    [evt.target.name]: newBoard
  });
} */}
}

export default App;
