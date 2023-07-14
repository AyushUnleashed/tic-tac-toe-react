import React,{startTransition, useState} from 'react' ;
import Square from './Square';

const Board = () =>{

    const[state,setState] = useState(Array(9).fill(null));
    const[isXTurn,setIsXTurn] = useState(true);
    console.log("state",state);

    const checkWinner = () =>{
        const winnerLogic = [
            [0,1,2],
            [3.4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        for(let logic of winnerLogic){
            const[a,b,c] = logic;
            if(state[a]!=null && state[a]==state[b] && state[b]==state[c]){
                return state[a];
            }
        }
       return false;
    }

    const isWinner = checkWinner();

    const handleClick = (index) =>{
        console.log('clicked on index:',index);
        const copyState = [...state];
        if(isXTurn){
            copyState[index]='x';
            setIsXTurn(false);
        }else{
            copyState[index]='o';
            setIsXTurn(true);
        }
        setState(copyState);
    }

    const handleReplay = ()=>{
        setState(Array(9).fill(null));
    } 

    return(
        <div className='board-container'>
            { isWinner ? (<>{isWinner} won the game <button onClick={handleReplay}> play again</button>   </> ): (<>
            <h5>It's {isXTurn? 'x' :'o'} turn</h5> 
            <div className='board-row'>
                <Square value={state[0]} SquareClicked={()=> handleClick(0)}/>
                <Square value={state[1]} SquareClicked={()=> handleClick(1)}/>
                <Square value={state[2]} SquareClicked={()=> handleClick(2)}/>
            </div>
            <div className='board-row'>
                <Square value={state[3]} SquareClicked={()=> handleClick(3)}/>
                <Square value={state[4]} SquareClicked={()=> handleClick(4)}/>
                <Square value={state[5]} SquareClicked={()=> handleClick(5)}/>
            </div>
            <div className='board-row'>
                <Square value={state[6]} SquareClicked={()=> handleClick(6)}/>
                <Square value={state[7]} SquareClicked={()=> handleClick(7)}/>
                <Square value={state[8]} SquareClicked={()=> handleClick(8)}/>
            </div></>)}

        </div>
    );
};

export default Board;