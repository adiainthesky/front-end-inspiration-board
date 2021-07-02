import React from 'react';
import './App.css';
import BoardList from './components/BoardList';
import CreateBoard from './components/CreateBoard';
import {useState, useEffect} from 'react';
import axios from 'axios';


const BASE_URL = "https://sand-inspiration-board.herokuapp.com";

function App() {
  
  const [boards, setBoards] = useState([]);
  
  // format for each board:
  //     {
  //       title: "Welcome!",
  //       owner: "Desperate One",
  //       board_id: 2021
  //     }

  const [selectedBoard, setSelectedBoard] = useState(null);

  console.log(`${selectedBoard?.board_id} LINE 28`);

  const onBoardSelected = (selectedBoard) => {
    setSelectedBoard(selectedBoard);
  };

  useEffect (() => {
    refreshBoards()
    },[]);

  const refreshBoards = () => {
    return axios
    .get(`${BASE_URL}/boards`)
    .then((boardsResponse) => {
      const boards = boardsResponse.data
      console.log(boards);
      setBoards(boards)})
    .catch((error)=>{console.log(error)})
  };

  console.log(`${selectedBoard?.board_id} LINE 48`);

  return (

    <section className="App">
      <header className="Header">
        <h1>{selectedBoard?.title} Inspiration Board</h1>
      </header>
      <main>
        <BoardList { ...{selectedBoard, onBoardSelected, boards} }/>
        <CreateBoard onUpdateBoardList={refreshBoards} />
      </main>
      <footer>©copyright 2021</footer>

    </section>
  );
}

export default App;

