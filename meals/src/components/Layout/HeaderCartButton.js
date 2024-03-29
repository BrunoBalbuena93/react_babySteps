import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const [btnHighlight, setBtnHighlight] = useState(false)
    const cartCtx = useContext(CartContext); 
    const {items} = cartCtx;
    const nItems = cartCtx.items.reduce((curr, item) => {return curr + item.amount}, 0)
    const btnClasses = `${classes.button} ${btnHighlight ? classes.bump: ''}`;
    useEffect(() => {
        if (cartCtx.items.length === 0){ return ; }
        setBtnHighlight(true);
        const timer = setTimeout(() => {
            setBtnHighlight(false);
        }, 300);
        return () => { clearTimeout(timer); }
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon></CartIcon></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{nItems}</span>
        </button>
    )
}

export default HeaderCartButton
