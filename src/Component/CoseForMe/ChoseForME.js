import React from 'react';
import './ChoseForME.css'
const ChoseForME = ({singleChose}) => {
    console.log(singleChose);
    return (
        <div>
            <img src={singleChose.img} className="choseImg" alt="" />
            <p>{singleChose.name}</p>

        </div>
    );
};

export default ChoseForME;