// import PropTypes from 'prop-types';
import Board from './Board';
import './Board.css';

const BoardList = (props) => {
    
    const displayTitleInfo = (board) => {
    //sends request to axios, gets response
    //uses a for loop to display each board in drop down - drop down does not create another component
    // store info in state when a board is selected
    return <p>board.title</p>
    }

    const onSelectBoard = (event) => {
        //render on page
        isSelected(event.target.value)
        console.log(props.selectedBoard)
        console.log(event.target)
        console.log(event.target.value)
    }

    const isSelected = (option) => {
        //setting current board to selected board. 
        props.setSelectedBoard(option);
      }

    return (
    <section>
        <h2>Pick a board</h2>
        <select onChange={onSelectBoard}> 
            {props.getAllOptions()}
        </select>
        <h2>Create a new board</h2>
        <main>
            <Board onClickCallback={displayTitleInfo}/>
        </main>
    </section>
    )
};

BoardList.propTypes = {

}

export default BoardList;