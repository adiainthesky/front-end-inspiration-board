import PropTypes from 'prop-types';
import './Board.css';

const Card = (props) => {

    console.log(`${props.message} Message on Card`);

    return (
        <section className="">
            <p>{props.message}</p>
            <ul>
                <li><p>{props.likes_count} 🐚</p></li>
                <li><p onClick={() => props.plusOneStar(props.card_id)}>+1</p></li>
                <li><p onClick={() => props.deleteCard(props.card_id)}>Delete</p></li>
            </ul>
        </section>
    )
};

Card.propTypes = {
    plusOneStar: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired
}

export default Card;