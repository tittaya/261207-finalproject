import React from 'react';
import '../App.css';
import Logo from '../img/donutlogo.png';
import Logo2 from '../img/donutlogoB.png';
import Logo3 from '../img/donutlogoV.png';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <form className="menu">
             <img src={Logo} className="App-logo-small" />
        
    

        <div className="split left">
        <h3>Menu</h3>
            <h4><button type="button" className="button">add</button>
            <img src={Logo} className="App-logo-small" />
            <lable for="pinkgaze">Strawberry Donut</lable></h4>
            <h4><button type="button" className="button">add</button>
            <img src={Logo2} className="App-logo-small" />
            <lable for="bluegaze">Bluebery Donut</lable></h4>
            <h4><button type="button" className="button">add</button>
            <img src={Logo3} className="App-logo-small" />
            <lable for="creamgaze">Valina Donut</lable></h4>
        </div>


        <div className="split right">
        <h4>Order</h4>
        <table className="table-order" align="center" >
        <tr>
         <th>Menu</th>
         <th>Price</th>
            </tr>
            <tr>
              <td>menu</td>
              <td>price</td>
             </tr>
             <tr>
          <td>menu</td>
          <td>price</td>
         </tr>
            </table>
        </div>   

    </form>
    );
}

export default Menu;