import React from 'react';

const Square = (props) => {
    return (
        <div className='square'
            onClick={props.SquareClicked}
         style={{
            border: "1px Solid", height: '100px ', width: '100%', display: 'flex', justifyContent: 'center',alignItems:'center'
        }}>
            <h5>{props.value}</h5>

        </div>
    )
}

export default Square;