import PropTypes from 'prop-types';
import './Board.css';

const Card = (props) => {

    const plusOneLike = () => {
        return <div></div>
    };

    const deleteCard = () => {
        return <div></div>
    }


    return (
        <section>
            <p>{props.message}</p>
            <ul>
                <li><p>{props.likes_count}⭐</p></li>
                <li><p onClick={() => props.plusOneLike(props.card_id)}>+1</p></li>
                <li><p onClick={() => props.deleteCard(props.card_id)}>Delete</p></li>
            </ul>
        </section>
    )
};

Card.propTypes = {
    selectedCard: PropTypes.func.isRequired,
    card_id: PropTypes.number.isRequired
}

export default Card;