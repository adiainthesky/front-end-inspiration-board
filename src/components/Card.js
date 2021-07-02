import PropTypes from 'prop-types';
import './Board.css';

const Card = (props) => {

    console.log(`${props.message} Message on Card`);

    return (
        <section>
            <div className="post-it">
                <p>{props.message}</p>
                <div><p>{props.likes_count}🐚</p></div>
                <div><p onClick={() => props.plusOneStar(props.card_id)}>+1</p></div>
                <div><p onClick={() => props.deleteCard(props.card_id)}>Delete</p></div>
            </div>
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