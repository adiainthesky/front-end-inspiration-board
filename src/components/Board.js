import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import CardList from './CardList';
import CreateCard from './CreateCard';
import { useState, useEffect } from 'react';
import axios from 'axios';


const BASE_URL = "https://sand-inspiration-board.herokuapp.com"

const Board = (props) => {
  //use board id to get cards via useEffect
  
  const [cards, setCards] = useState(
    [
      {
        board_id: null,
        card_id: null,
        likes_count: 0,
        message: ""
      },
    ]
  );

  // if board value changes, useEffect hears it and re renders the cards
  useEffect (() => {
    refreshCards()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.selectedBoard]);

  const refreshCards = () => {
    return axios
    .get(`${BASE_URL}/boards/${props.board_id}/cards`)
    .then((cardsResponse) => {
      const cards = cardsResponse.data
      console.log(cards);
      setCards(cards)})
    .catch((error)=>{console.log(error)})
  };

  const deleteCard = () => {
    return axios
    .delete(`${BASE_URL}/cards/${cards.card_id}`)
    .then((cardsResponse) => {
        const cards = cardsResponse.filter((card) => {
          return card.card_id
        });
        setCards(cards)})
    .catch((error) => {console.log(error)})
  };

  return (
    <section>
      <div>
        <CreateCard onUpdateCardList={refreshCards} />
      </div>

      <div>
        <CardList cards={cards} deleteCard={deleteCard}/>
      </div>
    </section>
  )
};

Board.propTypes = {
  selectedBoard: PropTypes.func.isRequired,
  board_id: PropTypes.number.isRequired
};

export default Board;
