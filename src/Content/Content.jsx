import s from './Content.module.css';

let Content = (props) => {
    let convert = () => {
            let sale = document.getElementById('amount').value;
            let rate = document.getElementById('sale__rate');
        let resultRate = document.getElementById('result__rate');
            if (rate.selectedIndex === 1 && resultRate.selectedIndex === 0 ) {
                let result = document.getElementById('newValue').value = sale * props.newUsd;
            }
            if (rate.selectedIndex === 2 && resultRate.selectedIndex === 0 ) {
                let result = document.getElementById('newValue').value = sale * props.newEur;
            }
    }
    return (
        <div className={s.div__rate}>
            <div className={s.div__converter}>
                <p>Amount</p>
                <input type="number" id='amount' defaultValue={1} />
                <p>From Currency</p>
                <select name="sale" id='sale__rate'>
                    <option>UAH</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
            </div>
            <button id="convert" onClick={convert}>Convert</button>
            <div className={s.div__converter}>
                <p>Amount</p>
                <input type="number" id='newValue' defaultValue={1} />
                <p>To Currency</p>
                <select name="buy" id='result__rate'>
                    <option>UAH</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
            </div>
        </div>
    )
}

export default Content;