import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const BASE_URL = "https://sand-inspiration-board.herokuapp.com"

const CreateCard = (props) => {

  const [formFields, setFormFields] = useState({
    message: ''
  });

  const onMessageChange = (event) => {
    setFormFields({
      ...formFields,
      message: event.target.value
      // what about the stars, +1 and Delete?
    })
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('I am in onCardSubmit', event);
    console.log(formFields);
    const requestBody = {
      message: formFields.message
    }
    axios.post(`${BASE_URL}/boards/${props.board_id}/cards`, requestBody)
      .then((response) => {
      props.onUpdateCardList()
      })
    setFormFields({
      // resets the form
      message: ''
    });
  };

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <h2>Create a new card</h2>

        <div>
          <label htmlFor="message">Message: </label>
          <input type="text" name="message" value={formFields.newMessage} onChange={onMessageChange} />
        </div>

        <input type="submit" value="Create New Card" />

      </form>
    </section>
  )
};

CreateCard.propTypes = {
  onUpdateCardList: PropTypes.func.isRequired
};

export default CreateCard;