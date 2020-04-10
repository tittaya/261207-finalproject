import React from 'react';
import '../App.css';
import Logo from '../img/donutlogo.png';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <form className="menu">
             <img src={Logo} className="App-logo-small" />
        
    

        <div className="container-menu">
        <h3>Menu</h3>
            <input type="menu" className="form-control" placeholder="menu" />
        </div>


        <div className="container-order">
        <h4>Order</h4>
            <input type="order" className="form-control" placeholder="Order" />
        </div>




        
    </form>
    );
}

export default Menu;