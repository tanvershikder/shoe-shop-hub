import React from 'react';
import './ChoseForME.css'
const ChoseForME = ({singleChose}) => {
    // console.log(singleChose);
    return (
        <div className='choseforme mb-3 border border-0 shadow p-2'>
            <p>select one show</p>
            <div className='d-flex justify-content-around'>
                <img src={singleChose.img} className="choseImg " alt="" />
                <h5>{singleChose.name}</h5>
            </div>

        </div>
    );
};

export default ChoseForME;