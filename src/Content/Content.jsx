import React, { useState } from "react";
import s from './Content.module.css';
/* import Rate from './API'; */

let Content = (props) => {
    let convert = () => {
        let sale = document.getElementById('amount').value;
        let convertSale = document.getElementById('newValue').value;
        let rate = document.getElementById('sale__rate');
        let resultRate = document.getElementById('result__rate');
        if (rate.selectedIndex === 1 && resultRate.selectedIndex === 0) {
            let result = document.getElementById('newValue').value = sale * props.newUsd;
        }
        if (rate.selectedIndex === 2 && resultRate.selectedIndex === 0) {
            let result = document.getElementById('newValue').value = sale * props.newEur;
        }
        if (rate.selectedIndex === 0 && resultRate.selectedIndex === 1) {
            let result = document.getElementById('newValue').value = sale / props.newUsd;
        }
        if (rate.selectedIndex === 0 && resultRate.selectedIndex === 2) {
            let result = document.getElementById('newValue').value = sale / props.newEur;
        }
    }
    
    function chaangeSelect() {
        let selectOne = document.querySelector('#sale__rate');
        let selectTwo = document.querySelector('#result__rate');
        let valOne = selectOne.value;
        selectOne.value = selectTwo.value;
        selectTwo.value = valOne;
        
        let sale = document.getElementById('amount');
        let convertSale = document.getElementById('newValue');
        let valInp = sale.value;
        sale.value = convertSale.value;
        convertSale.value = valInp;

    }

    /* 
    Part of Code, who link with API.js and API - Exchangerate

    const getInitialState = () => {
        const from = 'UAH';
        return from;
    };

    const [from, setValue] = useState(getInitialState);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const getInitialStatee = () => {
        const to = 'UAH';
        return to;
    };


    const [to, setValue_2] = useState(getInitialStatee);

    const handleChangee = (e) => {
        setValue_2(e.target.value);
    };



    const getInitialStateq = () => {
        const amount = document.getElementById('amount');
        return amount;
    };

    const [amount, setValue_3] = useState(getInitialStateq);

    const handleChangeq = (e) => {
        setValue_3(e.target.value);
    }; */
    return (
        <div className={s.div__rate}>
            {/* <Rate  value={from} valuee={to} valueq={amount} handle={handleChangeq} /> */}
            <div className={s.div__converter}>
                <p>Amount</p>
                <input type="number" id='amount' defaultValue={1} /* onChange={handleChangeq} */ />
                <p>From Currency</p>
                <select name="sale" id='sale__rate' /* onChange={handleChange} onClick={handleChange} */>
                    <option value='UAH'>UAH</option>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                </select>
            </div>
            <button id="convert" onClick={convert}>Convert</button>
            <button id={s.select_swap} onClick={chaangeSelect}>
                <img src="https://www.svgrepo.com/show/183494/sort-swap.svg" alt="swap" />
            </button>
            <div className={s.div__converter}>
                <p>Amount</p>
                <input type="number" id='newValue' defaultValue={1} />
                <p>To Currency</p>
                <select name="buy" id='result__rate' /* onChange={handleChangee} onClick={handleChangee} */>
                    <option>UAH</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
            </div>
        </div>
    )
}

export default Content;