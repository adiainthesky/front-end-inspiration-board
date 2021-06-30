import React from 'react';
import './App.css';
import Board from './components/Board';
import { useState} from 'react';
import axios from 'axios';


function App() {
  // const [boards, setBoards] = useState([{title:'Delia\'s', owner: "delia"}, {title:'Adelaide\'s'}, {title:'Natasha\'s'}, {title:'Sara\'s'}])
  const [boards, setBoards] = useState([{title:'Delia\'s', owner: "delia", cards: []}, {title:'Adelaide\'s'}, {title:'Natasha\'s'}, {title:'Sara\'s'}])
  const [selectedBoard, setSelectedBoard] = useState(null)

  //function to get all boards at start of app
  
  //form to create call createNewBoard


  const createNewBoard = (title, owner) => {
    console.log(`New board ${title} created`)
    // axios.post('',{title,owner}) 
    //   .then((response)=>{
    //     axios.get('').then((boardsResponse)=>{
    //       const boards = boardsResponse.data
    //       setBoards(boards)
    //     })
    //   })
  }

  // const createNewBoard = (data) => {
  //   const newBoard = {
  //     title: data.title,
  //     owner: data.owner
  //   }
  //   axios...
  // }

  const onSelectBoard = (event) => {
    //render on page
    isSelected(event.target.value)
    // dont need -- event.target.selected = true
    // console.log (event.target.value);
    console.log(selectedBoard)
    console.log(event.target)
    console.log(event.target.value)
  }

  const isSelected = (option) => {
    //setting current board to selected board. 
    setSelectedBoard(option);
  }

  const getAllOptions = () => {
    const options = boards.map(board => 
      // <option value={board.title} selected={isSelected(board.title)}>{board.title}</option>
      //not needed  if boards === selectedBoards then selected =true
      <option value={board.title}>{board.title}</option>
    );
    return options;    
  }

  const displayTitleInfo = (board) => {
    return 
      <p>board.title</p>
    }

  return (
    <div className="App">
      <header>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTs4k73tsmQGuUInH-lVvYy0S7yOhO4z3hQ&usqp=CAU" className="App-logo" alt="sandy beach" /> */}
        <h1>{selectedBoard} Inspiration Board</h1> 
      </header>

      <section className="sidebar">
        <h2>Pick a board</h2>
          <select onChange={onSelectBoard}> 
            {getAllOptions()}
          </select>
        <h2>Create a new board</h2>
          {/* <form onSubmit> 
            <input type="text" onChange = {createNewBoard}> Board title </input>
            <input type="text"> Owner's name </input>
            <input type="button"></input>
          </form> */}
        {/* <form action="http://..." method="POST"> maybe take out API stuff */}
        <form> {/*maybe take out API stuff*/}
          <label for="title">Board Title
            {/* <input type="text" title="title" value={state.title} onChange={createNewBoard}/> */}
            <input type="text" id="title"/>
          </label>
          <label for="owner">Owner's Name
            {/* <input type="text" name="owner" value={state.owner} onChange={createNewBoard}/> */}
            <input type="text" id="name"/>
          </label>
          <button onClick={(event) => createNewBoard(event.target.value)}>Create New Board</button>
        </form>
      </section> 




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

      <main>
        <Board onClickCallback={displayTitleInfo}/>
      </main>

    </div>
  );
}

export default App;
