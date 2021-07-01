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
  
  const [cards, setCards] = useState([]);
    // [
    //   {
    //     board_id: null,
    //     card_id: null,
    //     likes_count: 0,
    //     message: ""
    //   },
    // ]
  // );

  const [selectedCard, setSelectedCard] = useState(null);

  const onCardSelected = (selectedCard) => {
    setSelectedCard(selectedCard);
  };

  // if board value changes, useEffect hears it and re renders the cards
  useEffect (() => {
    refreshCards()
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

  return (
    <section>
      <div>
        <CreateCard onUpdateCardList={refreshCards} />
      </div>

      <div>
        {/* <CardList { ...{selectedCard, onCardSelected, cards} }/> */}
      </div>
    </section>
  )
};

Board.propTypes = {
  selectedBoard: PropTypes.func.isRequired
};

export default Board;
