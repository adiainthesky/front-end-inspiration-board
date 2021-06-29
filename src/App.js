import React from 'react';
import './App.css';
import Board from './components/Board';
import { useState} from 'react';
import axios from 'axios';

function App() {
  const [boards, setBoards] = useState([{title:'new board'}, {title:'yet another board'}])
  const [selectedBoard, setSelectedBoard] = useState(null)

  //function to get all boards at start of app

  const createNewBoard = (title, author) => {
    axios.post('',{title,author}) 
      .then((response)=>{
        axios.get('').then((boardsResponse)=>{
          const boards = boardsResponse.data
          setBoards(boards)
        })
      })
  }


  const onSelectBoard = (event) => {
    console.log (event.target.value);
  }

  const isSelected = (option) => {

  }

  const getAllOptions = () => {
    const options = boards.map(board => <option value={board.title} selected = {isSelected(board.title)}>{board.title}</option>);
    return options;    
  }



  return (
    <div className="App">
      <header>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTs4k73tsmQGuUInH-lVvYy0S7yOhO4z3hQ&usqp=CAU" className="App-logo" alt="sandy beach" /> */}
         <h1>{/*{currentBoard}*/} Inspiration Board</h1> 
      </header>

      <section className="sidebar">
        <h2>Pick a board drop down</h2>
        {/* <form onSubmit = {onSelectBoard}>Boards</form> */}
        <h2>Create new board button</h2>
      </section> 

      
      <select onChange={onSelectBoard}>{getAllOptions()}
      </select>


      <main>
        <Board />
      </main>

    </div>
  );
}

export default App;
