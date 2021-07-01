import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const CreateBoard = (props) => {

  // const [newTitle, setNewTitle] = useState("")
  // const [newOwner, setNewOwner] = useState("")

  const [formFields, setFormFields] = useState({
    title: '',
    owner: ''
  });

  const BASE_URL = "https://sand-inspiration-board.herokuapp.com"

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value
    })
  }

  const onOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      owner: event.target.value
    })
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('I am in onFormSubmit', event);
    console.log(formFields)
    const requestBody = {
      title: formFields.title,
      owner: formFields.owner
    }
    
    axios.post(`${BASE_URL}/boards`, requestBody)
      .then((response) => {
      props.onUpdateBoardList()
      })

    setFormFields({
      // resets the form
      title: '',
      owner: '',
    });
  };

  return (
    <section>
      <form onSubmit={onFormSubmit}>

        <div>
          <label
            htmlFor="title">
            Board Title
          </label>
          <input
            name="title"
            value={formFields.newTitle}
            onChange={onTitleChange} />
        </div>

        <div>
          <label htmlFor="owner">
            Owner's Name
          </label>

          <input
            name="owner"
            value={formFields.newOwner}
            onChange={onOwnerChange} />
        </div>

        <input
          type="submit"
          value="Create New Board" />

      </form>
    </section>
  )
}

export default CreateBoard;

CreateBoard.propTypes = {
  onUpdateBoardList: PropTypes.func.isRequired
};