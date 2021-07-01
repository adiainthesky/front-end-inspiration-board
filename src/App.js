import React from 'react';
import './App.css';
import BoardList from './components/BoardList';
import CreateBoard from './components/CreateBoard';
import {useState, useEffect} from 'react';
import axios from 'axios';

//Add this in .env
const BASE_URL = "https://sand-inspiration-board.herokuapp.com"

function App() {

  const [boards, setBoards] = useState([]);
    // [
    //   {
    //     title: 'Delia\'s',
    //     owner: "delia",
    //     board_id: null
    //   },

    //   {
    //     title: 'Adelaide\'s',
    //     owner: "adelaide",
    //     board_id: null
    //   },
    // ]);

  const [selectedBoard, setSelectedBoard] = useState(null);

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

  return (
    <section className="App">
      <header>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTs4k73tsmQGuUInH-lVvYy0S7yOhO4z3hQ&usqp=CAU" className="App-logo" alt="sandy beach" /> */}
        {/* //"safe navigation operator" '?' asking if null, use null, but if not null, use look up*/}
        <h1>{selectedBoard?.title} Inspiration Board</h1>
      </header>
      <main>
        <BoardList { ...{selectedBoard, onBoardSelected, boards} }/>
        <CreateBoard onUpdateBoardList={refreshBoards} />
      </main>
    </section>
  );
}

export default App;


//if time allows: functionality to have newly created board automatically open
// setSelectedBoard(boards[-1])