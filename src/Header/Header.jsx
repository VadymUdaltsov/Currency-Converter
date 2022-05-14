import s from './Header.module.css';


const Header = (props) => {
    return (
        <div className={s.header}>
            <img src=" https://mpng.subpng.com/20180425/oaw/kisspng-exchange-rate-foreign-exchange-market-computer-ico-5ae07ba7b55625.7169770315246611597428.jpg" alt="logo" className={s.header__logo} />
            <div className={s.header__nav}>
                <ul className={s.header__items}>
                    <li>
                        <a href="s">Currency converter</a>
                    </li>
                    <li>
                        <a href="s">Exchange rate</a>
                    </li>
                </ul>
            </div>
            <div className={s.header__rate}>
                <p>USD:{props.newUsd} UAH</p>
                <p>EUR:{props.newEur} UAH</p>
            </div>
            <div className={s.header__review}>
                <p>Leave a review</p>
            </div>
        </div>
    )
};

export default Header;