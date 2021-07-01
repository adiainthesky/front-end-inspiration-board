import PropTypes from 'prop-types';
import Card from './Card';
import './Board.css';
import axios from 'axios';

const CardList = (props) => {

    //sends request to axios with board id, gets response
    //uses a for loop to display each card

    const onSelectChanged = (event) => {
        //render on page
        const index = event.target.value
        props.onCardSelected(props.boards[index]);

        console.log(event.target);
        console.log(event.target.value);
    };

    const plusOneStar = () => {
        return <div></div>
    }

    const getAllOptions = () => {
        const options = props.cards.map((card, index) =>
            <option key={card.card_id} likes_count={props.likes_count} plusOneStar={plusOneStar} deleteCard={props.deleteCard}></option>
        );
    return options;
    };

    return (
    <section>
        <select onChange={onSelectChanged}> 
            {getAllOptions()}
        </select>
        <main>
            <Card cards={props.cards} plusOneStar={plusOneStar} deleteCard={props.deleteCard}/>
        </main>
    </section>
    )
};

CardList.propTypes = {
    cards: PropTypes.arrayOf(
          PropTypes.shape({
            card_id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            likes_count: PropTypes.number.isRequired,
            board_id: PropTypes.number.isRequired 
          }))
};

export default CardList;


