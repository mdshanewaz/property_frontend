import React, { useState } from 'react';
import './ShowPopUp.css';

export const ShowPopUp = ({ show, message, onClose}) => {

    if (!show) return null;

      return (
        <div className='pop-up'>
            <h2>{message}</h2>
            <button className='close_button' onClick={onClose}> Close</button> 
        </div>
    )
}
