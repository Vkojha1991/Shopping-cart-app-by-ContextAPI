import React, { useContext } from 'react';
import Item from './Item';
import { Contextvalue } from './Cart';

function Cartdata() {
    
    const { item, clearCart, totalAmount, totalItem } = useContext(Contextvalue);
    return (
          <div className="app"> 
            <div className="container">
                <h1>Shopping Cart</h1>
                <p>You have total { item.length } { item.length > 1 ? "items" : "item" } added in cart </p>
                <div className="cart-container">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>TITLE</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Qnt</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                item.map((curItem, i) => (
                                    <Item keys ={ i } {...curItem}/>
                                ))
                            }
                        </tbody>
                    </table>
                    <div>
                        <p></p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Total price: { totalAmount }</td>
                                    <td>Total Items: { totalItem }</td>
                                    <td><button onClick = { clearCart }>Clear Cart</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Cartdata
