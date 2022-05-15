import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import Review from './Review/Review';


const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <img src=" https://mpng.subpng.com/20180425/oaw/kisspng-exchange-rate-foreign-exchange-market-computer-ico-5ae07ba7b55625.7169770315246611597428.jpg" alt="logo" className={s.header__logo} />
                <div className={s.header__nav}>
                    <ul className={s.header__items}>
                        <li>
                            <NavLink to='/converter'>Currency converter</NavLink>
                        </li>
                        <li>
                            <NavLink to='/rate'>Exchange rate</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={s.header__rate}>
                    <p>USD:{props.newUsd} UAH</p>
                    <p>EUR:{props.newEur} UAH</p>
                </div>
                <div className={s.header__review}>
                    {<NavLink to='/review'><Review /></NavLink>}
                </div>
            </div>
        </div>
    )
};

export default Header;