import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import card from '../images/card.svg'
import AOS from "aos";
import logo from '../images/logo1.png'


export const Header = ({ startLogout }) => {
    useEffect(() => {
        AOS.init({
        });
      }, []);
    return (
            <header className="header">
        <div className="content-container" >
            <div className="header__content">
                <Link className="header_title" to="/home" >
                    <img data-aos="fade-right" data-aos-duration="1000" className="logo" src={logo}/>
                     <h1 data-aos="fade-right" data-aos-duration="1000">Naruto</h1>
                </Link>
                <div className="social_icons">
                    <img src={card} />
                </div>
            </div>
        </div>
    </header>
    )
}
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
// <NavLink to="/portfolio" activeClassName='is-active' exact>Portfolio</NavLink>
// <NavLink to="/contact" activeClassName='is-active'>Create Expense</NavLink>