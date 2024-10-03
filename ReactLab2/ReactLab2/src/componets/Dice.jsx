import React from 'react'
import { diceFace } from './helper'

const Dice = ({ number }) => {
    const diceFface = diceFace[number]

    return (
        <div className='dice'>
            <i className={`fas fa-dice-${diceFface}`}></i>
        </div>
    )
}

export default Dice;