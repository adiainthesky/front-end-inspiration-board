import PropTypes from 'prop-types';
import Board from './Board';
import './Board.css';

const BoardList = (props) => {

    const onSelectChanged = (event) => {
        //render on page
        const index = event.target.value
        props.onBoardSelected(props.boards[index]);

        console.log(event.target);
        console.log(event.target.value);
    };

    const getAllOptions = () => {
        const options = props.boards.map((board, index) =>
            // <option value={board.title} selected={isSelected(board.title)}>{board.title}</option>
            // not needed if boards === selectedBoards then selected =true
            <option key={board.board_id} value={index}>{board.title}</option>
        );
    return options;
    };

    return (
    <section>
        <h2>Pick a board</h2>
        <select onChange={onSelectChanged}> 
            {getAllOptions()}
        </select>
        <main>
            {/* Is this redundant, pssing both board_id and selsectedBoard? */}
            <Board board_id={props.board_id} selectedBoard={props.selectedBoard}/>
        </main>
    </section>
    )
};

BoardList.propTypes = {
    selectedBoard: PropTypes.string.isRequired,
    onBoardSelected: PropTypes.func.isRequired,
    boards: PropTypes.arrayOf(
          PropTypes.shape({
            board_id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired
          }))
};

export default BoardList;