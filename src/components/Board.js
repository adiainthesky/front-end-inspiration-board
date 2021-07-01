import PropTypes from 'prop-types';
import './Board.css';
import { useState, useEffect } from 'react';

const Board = (props) => {
  //use board id to get cards via useEffect
  // const [cards, setCards] = useState([])
  // if the board value changes, it should run the useEffect - put in in the [] in useEffect [props.selectedBoard]
  
  const [cards, setCards] = useState(
    [
      {
        board_id: null,
        card_id: null,
        likes_count: 0,
        message: ""
      },
    ]
  )

  return <div></div>
};


Board.propTypes = {

}

export default Board;
