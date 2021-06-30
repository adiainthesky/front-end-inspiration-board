import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';

const CreateBoard = (props) => {

  const [newTitle, setNewTitle] = useState("")
  const [newOwner, setNewOwner] = useState("")

  const onTitleChanged = (event) => {
    setNewTitle(event.target.value);
  }

  const onOwnerChanged = (event) => {
    setNewOwner(event.target.value);
  }

<section>
    <form onSubmit={(event) => event.preventDefault()}> {/*maybe take out API stuff*/}
        <label for="title">Board Title</label>
        <input id="title" type="text" value={newTitle} onChange={onTitleChanged}/>
        <label for="owner">Owner's Name</label>
        <input id="owner" type="text" value={newOwner} onChange={onOwnerChanged}/>
        <button onClick={props.onClickCallbak}>Create New Board</button>
    </form>
</section> 
}

CreateBoard.propTypes = {
    // value: PropTypes.string.isRequired,
    onClickCallback: PropTypes.func.isRequired,
    // id: PropTypes.number.isRequired,
  };

export default CreateBoard;