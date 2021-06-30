import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const CreateBoard = (props) => {

  const [newTitle, setNewTitle] = useState("")
  const [newOwner, setNewOwner] = useState("")

  const BASE_URL="https://sand-inspiration-board.herokuapp.com"

  const createNewBoard = (props) => {
    console.log(newTitle, newOwner)
    const requestBody = {
      title: newTitle,
      owner: newOwner
    }
    console.log(requestBody);
    axios.post(`${BASE_URL}/boards`, requestBody) 
      .then((response)=>{
        axios.get(`${BASE_URL}/boards`).then((boardsResponse)=>{
          const boards = boardsResponse.data
          props.setBoards(boards)       
        })
      })
    console.log("New board created")
  }

  const onTitleChanged = (event) => {
    setNewTitle(event.target.value);
  }

  const onOwnerChanged = (event) => {
    setNewOwner(event.target.value);
  }
    return (
    <section>
        <form onSubmit={(event) => event.preventDefault()}> {/*maybe take out API stuff*/}
            <label for="title">Board Title</label>
            <input id="title" type="text" value={newTitle} onChange={onTitleChanged}/>
            <label for="owner">Owner's Name</label>
            <input id="owner" type="text" value={newOwner} onChange={onOwnerChanged}/>
            <button onClick={createNewBoard}>Create New Board</button>
        </form>
    </section> 
    )
}

CreateBoard.propTypes = {
    // value: PropTypes.string.isRequired,
    // onClickCallback: PropTypes.func.isRequired,
    // id: PropTypes.number.isRequired,
  };

export default CreateBoard;