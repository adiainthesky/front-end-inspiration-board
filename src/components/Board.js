import PropTypes from 'prop-types';
import './Board.css';
import { useState } from 'react';

const Board = () => {
  // const [cards, setCards] = useState([])
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
