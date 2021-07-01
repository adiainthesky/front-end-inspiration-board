import PropTypes from 'prop-types';
import Card from './Card';
import './Board.css';

const CardList = (props) => {

    //sends request to axios with board id, gets response
    //uses a for loop to display each card

    const onSelectChanged = (event) => {
        //render on page
        const index = event.target.value
        props.onCardSelected(props.cards[index]);

        console.log(event.target);
        console.log(event.target.value);
    };

    const getAllOptions = () => {
        const options = props.cards.map((card, index) =>
            <option key={card.card_id} value={index}>{card.message}</option>
        );
    return options;
    };

    return (
    <section>
        <select onChange={onSelectChanged}> 
            {getAllOptions()}
        </select>
        <main>
            <Card card_id={props.card_id} message={props.message} selectedCard={props.selectedCard}/>
        </main>
    </section>
    )
};

CardList.propTypes = {
    selectedCard: PropTypes.string.isRequired,
    onCardSelected: PropTypes.func.isRequired,
    cards: PropTypes.arrayOf(
          PropTypes.shape({
            card_id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            likes_count: PropTypes.number.isRequired,
            board_id: PropTypes.number.isRequired 
          }))
};

export default CardList;