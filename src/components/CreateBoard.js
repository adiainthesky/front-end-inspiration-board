import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
require('dotenv').config();

const BASE_URL = "https://sand-inspiration-board.herokuapp.com";

const CreateBoard = (props) => {

  const [formFields, setFormFields] = useState({
    title: '',
    owner: ''
  });

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value
    })
  };

  const onOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      owner: event.target.value
    })
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('I am in onFormSubmit', event);
    console.log(formFields);
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
      owner: ''
    });
  };

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <h2>Create a new board</h2>

        <div>
          <label htmlFor="title">Board Title: </label>
          <input type="text" name="title" value={formFields.title} onChange={onTitleChange} />
        </div>

        <div>
          <label htmlFor="owner">Owner's Name: </label>
          <input type="text" name="owner" value={formFields.owner} onChange={onOwnerChange} className={formFields.owner.length === 0 && formFields.title.length > 0 ? 'invalid-form' : ''}/>
        </div>

        <input type="submit" value="Create New Board" disabled={formFields.title.length === 0 || formFields.owner.length === 0} />
        {/* <input type="submit" value="Create New Board" /> */}

      </form>
    </section>
  )
};

CreateBoard.propTypes = {
  onUpdateBoardList: PropTypes.func.isRequired
};

export default CreateBoard;
