import React, { useContext } from 'react';
import { Contextvalue } from './Cart';

function Item({ id, title, description, price, img, quantity }) {
    const { removeItem, DEC, INC } = useContext(Contextvalue);
    return (
        <tr>
            <td>{ id }</td>
            <td><img src={ img } alt={ title }/></td>
            <td>{ title }</td>
            <td>{ description }</td>
            <td>{ price }</td>
            <td><button onClick={() => DEC(id)}>-</button> { quantity } <button onClick={() => INC(id)}>+</button></td>
            <td><button onClick={() => removeItem(id)}>Remove</button></td>
        </tr>
    )
}

export default Item;
